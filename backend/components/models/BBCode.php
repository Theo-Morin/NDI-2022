<?php

class BBCode
{
  static function bbcode_to_html($content){
    $find = array(
        '~\[b\](.*?)\[/b\]~s',
        '~\[i\](.*?)\[/i\]~s',
        '~\[u\](.*?)\[/u\]~s',
        '~\[center\](.*?)\[/center\]~s',
        '~\[quote\](.*?)\[/quote\]~s',
        '~\[size=(.*?)\](.*?)\[/size\]~s',
        '~\[font=(.*?)\](.*?)\[/font\]~s',
        '~\[color=(.*?)\](.*?)\[/color\]~s',
        '~\[url=(.*?)\](.*?)\[/url\]~s',
        '~\[img\](https?://.*?\.(?:jpg|jpeg|gif|png|bmp))\[/img\]~s',
        '~\[list\](.*?)\[/list\]~s',
        '~\[list=1\](.*?)\[/list\]~s',
        '~\[s\](.*?)\[/s\]~s',
        '~\[right\](.*?)\[/right\]~s',
        '~\[video\](.*?)\[/video\]~s',
        '~\[iframe\](.*?)\[/iframe\]~s',
    );
    
    // HTML tags to replace BBcode
    $replace = array(
        '<b>$1</b>',
        '<i>$1</i>',
        '<span style="text-decoration:underline;">$1</span>',
        '<center>$1</center>',
        '<pre>$1</pre>',
        '<span style="font-size:$1%;">$2</span>',
        '<span style="font-family:$1;">$2</span>',
        '<span style="color:$1;">$2</span>',
        '<a href="$1" target="_blank">$2</a>',
        '<img src="$1" alt="" />',
        '<ul>$1</ul>',
        '<ol>$1</ol>',
        '<strike>$1</strike>',
        '<p style="text-align:right;">$1</p>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="300" height="380" src="$1" frameborder="0"></iframe>',
    );

    // Replacing the BBcodes with corresponding HTML tags
    $content = preg_replace($find,$replace,$content);
    $content = str_replace("[*]", "<li>", $content);
    $content = str_replace("[/*]", "</li>", $content);
    return $content;
  }
}
