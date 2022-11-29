<?php

class JWToken {
    // Full personalized Token
    static function generate($payload) {
        $payload['iat'] = time();
        $header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256'])));
        $payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));
        $signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(hashPasswd($header . "." . $payload)));
        $jwt = $header . "." . $payload . "." . $signature;
        return $jwt;
    }

    static function decode($token) {
        try {
            list($header, $payload, $signature) = explode('.', $token);
            if(!isset($signature)) throw new Exception();
            $decodeHeader = (array) json_decode(base64_decode(str_replace(['-', '_', ''], ['+', '/', '='], $header)));
            $decodePayload = (array) json_decode(base64_decode(str_replace(['-', '_', ''], ['+', '/', '='], $payload)));
            $newSign = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(hashPasswd($header . "." . $payload)));
            if($newSign == $signature) return $decodePayload;
            else return false;
        }
        catch(Exception $e){return false;}
    }
}