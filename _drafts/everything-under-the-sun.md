---
layout: post
title: Everything under the sun
tags: go vanity import
---

Buying this domain has been quite a trip to the past, spurring a desire to rescue all those old rumblings and debris collecting dust in a server somewhere to, well, still collect dust, but now under my own banner :P 

Anyway, looking at my old Go code reminded me of [vanity imports](https://golang.org/cmd/go/#hdr-Remote_import_paths). My Java code already lives under a `org.sbrubbles` package anyway (which is what inspired the purchase of this domain); my Go code should do so as well, right? So, let's get to work...

### Mirror, mirror, on the wall...

A common convention to avoid package name collisions is to use the owner's domain as part of the names. This hitches a ride on the DNS system to help ensure uniqueness, and is how [Java does it](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html), among others. 

`go get` uses the same idea, except that the package name is assumed to be an URL where Go can find the corresponding code, or at least a pointer to where it is. Using GitHub-or-similar is the path of least effort, since they are special-cased in the code. Of course, if for whatever reason you decide to change hosting for your code, you break *everybody* who depended on it, which is mean :( 

Vanity imports to the rescue! The vanity import link above provides the official explanation on how it all works, but, in a nutshell, `go get` developed a little algorithm to find and retrieve your code:
1. If it's in one of the blessed VCS hosting sites (GitHub, Bitbucket, Launchpad and IBM DevOps Services, of all things), everything Just Works&trade;. 
2. If it's in a non-blessed VCS hosting site, but uses a blessed VCS (Bazaar, Fossil, Git, Mercurial or Subversion), you can still use it, but you'll need to use an import path like `repository.vcs/path`. The `.vcs` indicates which VCS you're using, and helps separate the root of the repo from the path where your package is. I haven't tried it myself, but it seems like it Just Works&trade;.
3. Otherwise, `go get` will try to `GET` an HTML document at the given import path, which will tell it where the actual code is. 

This HTML document should have a `<meta>` element named `go-import`, like this: 

{% highlight html %}
<meta name="go-import" content="import-prefix vcs repo-root">
{% endhighlight %} 

`import-prefix` is the root of the import path, which represents the "repository" in Go code. `vcs` is, well, the VCS used in the actual hosting. And `repo-root` is the root of the repository where the code actually is. So, for `sbrubbles.org/go/nexus`, the `<meta>` is 

{% highlight html %}
<meta name="go-import" content="sbrubbles.org/go/nexus git https://github.com/hanjos/nexus">
{% endhighlight %} 

And GoDoc, by the way, [also checks](https://github.com/golang/gddo/wiki/Source-Code-Links) for a `<meta>`, called `go-source`:

{% highlight html %}
<meta name="go-source" content="prefix home directory file">
{% endhighlight %}

`prefix` is the part of the import path corresponding to the repository root. `home` is the repository's home page. `directory` is a URL template for a page listing the files in the package. And `file` is a URL template for a link to a line in a source file.

For `sbrubbles.org/go/nexus`, here's the `go-source`:

{% highlight html %}
<meta name="go-source" content="sbrubbles.org/go/nexus https://github.com/hanjos/nexus/ https://github.com/hanjos/nexus/tree/master{/dir} https://github.com/hanjos/nexus/blob/master{/dir}/{file}#L{line}">
{% endhighlight %}

Each subpackage should have an HTML of their own, since that's what `go get` tries to access. But they all use the exact same `<meta>` as the root package, since they're all rooted in the same "repository". 

### Matters of great import

IMHO it's quite an elegant and decentralized solution. But this means there may be two different import paths to the same code, which may lead to code duplication, `init` hell and eternal shame. 

The solution to avoid *that* is to use [import comments](https://golang.org/cmd/go/#hdr-Import_path_checking), which is how one informs Go what is the official import path to use.

Basically, pick one file in your package (doesn't matter which) and add a one-line comment, like so:

{% highlight go %}
package nexus // import "sbrubbles.org/go/nexus"
{% endhighlight %}

Go will break the build if the code doesn't come from that URL or can't be found in that path.

### “Always have an attitude of gratitude.”

All this HTML needs to be served somewhere, hopefully in a nice URL. One can go old school (although subpackages might be a pain), but there's tons of great static site generators out here (this blog is in [Jekyll](https://jekyllrb.com/), but I hear great things about [Nanoc](https://nanoc.ws/) and [Hugo](https://gohugo.io/), for example), so that's the easy part :)

Don't go crazy on the HTML; Go uses an [XML parser](https://github.com/golang/go/blob/1102616/src/cmd/go/internal/get/discovery.go#L32) to extract the `<meta>`, which means it may choke on CSS or JavaScript. The examples I've seen basically redirect to browser to the package's documentation on [GoDoc](https://godoc.org/), in the eventuality of somebody pointing a browser there.

### Kurzgesagt

So, after all this, here's the HTML at `sbrubbles.org/go/nexus`:

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="go-import" content="sbrubbles.org/go/nexus git https://github.com/hanjos/nexus">
    <meta name="go-source" content="sbrubbles.org/go/nexus https://github.com/hanjos/nexus/ https://github.com/hanjos/nexus/tree/master{/dir} https://github.com/hanjos/nexus/blob/master{/dir}/{file}#L{line}">
    <meta http-equiv="refresh" content="0; url=https://godoc.org/sbrubbles.org/go/nexus">
</head>
<body>
Nothing to see here; <a href="https://godoc.org/sbrubbles.org/go/nexus">move along...</a>
</body>
</html>
{% endhighlight %}

### In vain?

Now, after all of that being said... 

Go is getting [modules](https://blog.golang.org/modules2019), so *a lot* of this might change. 

<figure class='center-block' style='max-width: 200px'>
  <img alt='Sad trombone enamel pin' src='/assets/images/sad_trombone.jpg' title='Photo from etsy.com'>
</figure>

I may need to revisit my old code soon...