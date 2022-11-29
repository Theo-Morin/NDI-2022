<?php

class File {
    /**
     * @param $image   : is the $_FILE content
     * @param $folder  : is the path where you want to store your image, example : "users/profile_picture"
     */
    public static function upload($image, $folder)
    {
        //exit(var_dump($image));
        $extensions = ['png', 'jpg', 'jpeg', 'gif'];
        $extension = explode('/', $image['type']);
        $extension = $extension[count($extension) - 1];
        $dossier = utf8_encode("./public/assets/img/" . $folder . "/" . $image['name']);
        if(in_array($extension, $extensions))
        {
            if(is_uploaded_file($image['tmp_name']))
            {
                if(file_exists($dossier))
                {
                    unlink($dossier);
                }
                if(move_uploaded_file($image['tmp_name'], $dossier))
                {
                    return $dossier;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

}
