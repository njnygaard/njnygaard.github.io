---
title: "Cloudflare and Hugo"
date: 2017-08-17T14:34:23-07:00
draft: false
---
Well, you don't really need a Markdown title in the post, because the theme/Hugo will blast a huge one at the top.

I had some issues getting the GitHub page to properly forward to the resources I wanted. I opened a ticket with them to that effect. 

```
curl https://njnygaard.github.io/css/side-menu.css -v
*   Trying 151.101.193.147...
* TCP_NODELAY set
* Connected to njnygaard.github.io (151.101.193.147) port 443 (#0)
* TLS 1.2 connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
* Server certificate: www.github.com
* Server certificate: DigiCert SHA2 High Assurance Server CA
* Server certificate: DigiCert High Assurance EV Root CA
> GET /css/side-menu.css HTTP/1.1
> Host: njnygaard.github.io
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Server: GitHub.com
< Content-Type: text/html
< Location: http://www.nygaard.site/css/side-menu.css
< X-GitHub-Request-Id: 1614:1DFC6:9A673C:A5FE05:599605C9
< Content-Length: 178
< Accept-Ranges: bytes
< Date: Thu, 17 Aug 2017 21:08:25 GMT
< Via: 1.1 varnish
< Age: 0
< Connection: keep-alive
< X-Served-By: cache-sjc3138-SJC
< X-Cache: MISS
< X-Cache-Hits: 0
< X-Timer: S1503004106.616215,VS0,VE24
< Vary: Accept-Encoding
< X-Fastly-Request-ID: bf71de7f975b228136a6a6c9f9a97cf51bdaa9cb
<
<html>
<head><title>301 Moved Permanently</title></head>
<body bgcolor="white">
<center><h1>301 Moved Permanently</h1></center>
<hr><center>nginx</center>
</body>
</html>
* Connection #0 to host njnygaard.github.io left intact
```

You can see that when you set the base name to the correct domain, it redirects to the wrong URL.