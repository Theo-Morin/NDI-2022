<?php

class Instagram {
    private $accessToken = "";
    private $secret = "";
    private $id = "";

    private $refreshUrl = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=";

    private $feedUrl = "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&limit=17&access_token=";

    function __construct() {
        $this->refreshToken();
    }

    public function getFeed() {
        return getPageContent($this->feedUrl . $this->accessToken);
    }

    public function refreshToken() {
        return getPageContent($this->refreshUrl . $this->accessToken);
    }
}