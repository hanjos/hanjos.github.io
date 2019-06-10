---
layout: post
title: To remember is to live
tags: english
---

Somehow, I have stumbled upon my old [Google Bookmarks](https://www.google.com/bookmarks/). 

I'm surprised the service is still live. But it does look like something Google forgot about. And I've seen that before with [Google Reader](https://www.cnet.com/news/google-closes-the-book-on-reader-announces-july-1-sunset/)...

<figure class='center-block'>
  <img alt='Pouring one out for Google Reader' src='/assets/images/pouring-one-out.png' width='400' title='Photo from freundevonfreunden.com'>
  <figcaption>R.I.P.</figcaption>
</figure>

It has been a fascinating trip through a varied, incomplete and not-that-recent history (the oldest entry is from 11 years ago!) of stuff that once interested me. Even though a lot has linkrotted, and some of the stuff is now obsolete or no longer needed, there are several gems worth revisiting. They'll probably end up here, after some sifting through to remove what history left behind.

Given Google's [history](https://killedbygoogle.com/), Bookmarks doesn't look long for this world; so it's time to look for alternatives. I could use [Pocket](https://getpocket.com/), for example. It seems nice, it can read Bookmarks' export file, and even though it sells itself as [a reading list](https://www.makeuseof.com/tag/pros-cons-pocket/), not a bookmarking service, it's close enough for my purposes. And if I could retrieve some data from Pocket to show stuff right here on the site, a little JavaScript would be enough to extract the data and build the page.

Thing is, I haven't found a way to make a public reading list. I could use [Pocket's API](https://getpocket.com/developer/docs/overview), but that would involve OAuth, which means either making the credentials public (since [the GitHub repo hosting this site](https://github.com/hanjos/hanjos.github.io) is public) or using/writing separate apps to intermediate. I could consume the [RSS feed](https://getpocket.com/users/*sso14176479554776e7/feed/all) (which can be made public), but it's not complete (not without multiple requests), and it doesn't look like there's a way to filter the feed (like, say, by tag or something). 

Or I could just hack something right here; I could whip something up in a jiffy with Jekyll and Git provides easy backups for the data. Of course, some features would be missing (Pocket's [apps and integrations](https://getpocket.com/apps/) are nice, and sharing is caring). But I wouldn't depend on third party services for a relatively simple task.

<figure class='center-block'>
  <img alt='How hard can it be?' src='/assets/images/how-hard-can-it-be.jpg' 
    width='250px' title='Picture from teepublic.com'>
  <figcaption>Right?</figcaption>
</figure>



