---
layout: post
title: To remember is to live
tags: english bookmarks
---

Somehow, I have stumbled upon my old [Google Bookmarks](https://www.google.com/bookmarks/). 

I'm surprised the service is still live. But it does look like something Google forgot about. And I've seen that before with [Google Reader](https://www.cnet.com/news/google-closes-the-book-on-reader-announces-july-1-sunset/)...

<figure class='center-block'>
  <img alt='Pouring one out for Google Reader' src='/assets/images/pouring-one-out.png' style='max-width: 400px; width: 100%' title='Photo from freundevonfreunden.com'>
  <figcaption>R.I.P.</figcaption>
</figure>

It has been a fascinating trip through a varied, incomplete and not-that-recent history (the oldest entry is from 11 years ago!) of stuff that once interested me. Even though a lot has linkrotted, and some of the stuff is now obsolete or no longer needed, there are several gems worth revisiting. They'll probably end up here, after some sifting through to remove what history left behind.

Given Google's [history](https://killedbygoogle.com/), Bookmarks doesn't look long for this world; so it's time to look for alternatives. I could use [Pocket](https://getpocket.com/), for example. It seems nice, it can read Bookmarks' export file, and even though it sells itself as [a reading list](https://www.makeuseof.com/tag/pros-cons-pocket/), it's close enough for my purposes. And a little JavaScript should be enough to extract the data and build the page, right? Well...

I haven't found a way to make a public reading list. I could use [Pocket's API](https://getpocket.com/developer/docs/overview), but that would involve OAuth, which means either making the credentials public (since [the GitHub repo hosting this](https://github.com/hanjos/hanjos.github.io) is public) or using/writing separate apps to intermediate. I could consume the [RSS feed](https://getpocket.com/users/*sso14176479554776e7/feed/all) (which can be made public), but it's not complete (not without multiple requests), and it doesn't look like there's a way to filter the feed (like, say, by tag or something). 

I could look at other services. But, after giving it some thought, the idea of this site being backed by a constellation of little services doesn't seem nice, with my data spread all over the place and lots of code snippets pulling them in. So I'll just hack something right here. Of course, some features would be missing (Pocket's [apps and integrations](https://getpocket.com/apps/) are nice, and sharing is caring). But I wouldn't depend on third party services for a relatively simple task. 

<figure class='center-block'>
  <img alt='How hard can it be?' src='/assets/images/how-hard-can-it-be.jpg' 
    style='max-width: 300px; width: 100%' title='Picture from teepublic.com'>
  <figcaption>Right?</figcaption>
</figure>



