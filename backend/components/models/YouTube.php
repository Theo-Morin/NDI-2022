<?php

class YouTube
{
    private static $key = "";

    public static function video()
    {
        //Get videos from channel by YouTube Data API
        $API_key    = Self::$key;
        $channelID  = '';
        $maxResults = 5;

        $videoList = json_decode(file_get_contents('https://www.googleapis.com/youtube/v3/search?key=' . Youtube::$key . '&channelId=' . $channelID . '&part=snippet,id&order=date&maxResults=15'));

        return $videoList;
    }
}
