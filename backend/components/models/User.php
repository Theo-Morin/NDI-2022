<?php

class User {
    private $token;
    private $userId;
    private $email;

    function __construct($username = false, $password = false) {
        if($username && $password) {
            $this->login($username, $passwd);
        }
        else {
            $token = constant('personalToken');
            if($this->isLogged()) {
                $email = $token['payload']['email'];
                $userId = $token['payload']['userId'];
                $this->token = $token;
            }
        }

    }
    public function getToken() {return $token;}
    public function getEmail() {return $this->email;}
    public function getUserId() {return $this->userId;}
    public function isLogged() {
        if(!isset($this->token)) return false;
        if(JWToken::decode($this->token)) return true;
        else return false;
    }

    public function login($username, $password) {
        $password = hashPasswd($password);
        $req = Database::getInstance()->prepare('SELECT * FROM users WHERE email = ? AND passwd = ?');
        $req->execute(array($username, $password));
        if($req->RowCount() == 1) {
            $result = $req->Fetch();
            $token = JWToken::generate(['userId' => $result['userId'],'email' => $result['email'], 'userAgent' => $_SERVER['HTTP_USER_AGENT']]);
            return $token;
        }
        return false;
    }
    public static function register($email, $pseudonyme, $passwd, $firstname = false, $lastName = false, $phoneNumber = false) {
        $req = Database::getInstance()->prepare('SELECT * FROM users WHERE email = ?');
        $req->execute(array($email));
        if($req->RowCount() > 0) return false;
        $req = Database::getInstance()->prepare('INSERT INTO users(email, pseudonyme, passwd, firstName, lastName, phoneNumber) VALUES(?,?,?,?,?,?)');
        $req->execute(array($email, $pseudonyme, $passwd, $firstname, $lastName,$phoneNumber));
        return true;
    }

    public function getFullProfile() {
        $req = Database::getInstance()->prepare('SELECT * FROM users WHERE userId = ?');
        $req->execute(array($this->userId));
        $res = $req->Fetch();
        $res['passwd'] = 'NONE';
        $res['forgotPasswordToken'] = 'NONE';
        return $req->Fetch();
    }

    public static function getAllProfiles() {
        $req = Database::getInstance()->prepare('SELECT email, pseudonyme, firstName, lastName, phoneNumber FROM users');
        $req->execute();

        return $req->FetchAll();
    }
    
    public function editProfile($email = false, $pseudonyme = false, $firstName = false, $lastName = false, $phoneNumber = false) {
        $reqContent = 'UPDATE users SET isForgot = 0';
        $ar = array();
        if($email) {
            $ar[] = $email;
            $reqContent .= ', email = ? ';
        }
        if($pseudonyme) {
            $ar[] = $pseudonyme;
            $reqContent .= ', pseudonyme = ?';
        }
        if($firstName) {
            $ar[] = $firstName;
            $reqContent .= ', firstName = ?';
        }
        if($lastName) {
            $ar[] = $lastName;
            $reqContent .= ', lastName = ?';
        }
        if($phoneNumber) {
            $ar[] = $phoneNumber;
            $reqContent .= ', phoneNumber = ?';
        }
        $reqContent .= ' WHERE userId = ?';
        $ar[] = $this->userId;

        $req = Database::getInstance()->prepare($reqContent);
        $req->execute($ar);
        return true;
    }

    public static function getUserFromForgotToken($token){
        $req = Database::getInstance()->prepare('SELECT userId FROm users WHERE forgotPasswordToken = ?');
        $req->execute(array($token));

        return $req->RowCount() == 1;
    }

    public function editPassword($passwd, $newPasswd, $email = false, $forgotPasswordToken = false) {
        $newPasswd = hashPasswd($newPasswd);
        $passwd = hashPasswd($passwd);
        $req = Database::getInstance()->prepare('SELECT email, passwd FROM users WHERE email = ? AND passwd = ?');
        $req->execute(array($email, $passwd));
        if($req->RowCount() == 1) {
            $req = Database::getInstance()->prepare('UPDATE users SET passwd = ? WHERE email = ? AND passwd = ?');
            $req->execute(array($newPasswd,$email,$passwd));
        } else return false;
    }
}
