---
title: "Cloudflare and Hugo"
date: 2017-08-17T14:34:23-07:00
draft: false
---
Hey hey! I got it to work! I'll use this post to log what I had to do to get it to work.

# Motivation
I wanted a site for my personal use. I started off with a full stack deployed on AWS, but when your trial runs out, you can get hit with a pretty hefty usage.

[![AWS Bill][aws]][aws]

That's quite a bit of money for something that I really wanted as a note store. I had originally envisioned some more [in-depth features][nygaard], but my side project has taken priority. More on that later.

# Solution

[GitHub Pages][gh] offers a solution where you can host a static site from a repository. That's great! By default, you get one conventional hostname that points to `username.github.io` when you create a repo of the same name in your account.

So that's nice, but it is not really easy to manage a bunch of flat files and HTML. It would be super nice if I could just write notes in markdown like I've been doing for years and have that be a magical website.

Enter [Hugo][hugo]. Use Hugo to manage your content as Markdown and it does the gross things like CSS for you. Also it is written in Golang, so I'm naturally a fanboy.

That all worked great but there were issues with HTTPS. I need that man. I thought CloudFlare would fix that for me, but there were some nuances about the configuration there too.

# Issues

I'll just share the result of my suffering with you.

## Cloudflare

### DNS Tab

[![DNS][dns]][dns]

### Page Rules Tab

[![Page Rules][page-rules]][page-rules]

## GitHub Pages

### CNAME File

[![CNAME][cname]][cname]

## Hugo

### config.toml

```yaml
baseURL = "https://www.nygaard.site/"
```

And that was it!

# Resolution

I was able to get my beautiful site hosting all my CSS via HTTPS. I will update this if I think of more steps.

[aws]: aws.png
[nygaard]: https://gitlab.com/droneprime/nygaard.site
[gh]: https://pages.github.com/
[hugo]:https://gohugo.io/
[cname]:cname.png
[page-rules]:page-rules.png
[dns]:dns.png