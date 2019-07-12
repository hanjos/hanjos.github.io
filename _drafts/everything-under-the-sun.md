---
layout: post
title: Everything under the sun
tags: go vanity import
---

Buying this domain has been quite a trip to the past, spurring a desire to rescue all those old rumblings and debris collecting dust in a server somewhere to, well, still collect dust, but now under my own banner :P 

Anyway, looking at my old Go code reminded me of [vanity imports](https://golang.org/cmd/go/#hdr-Remote_import_paths). My Java code already lives under a `org.sbrubbles` package anyway (which is what inspired the purchase of this domain); my Go code should do so as well, right?

Given how `go get` works, using GitHub-or-similar is the path of least effort. Of course, if for whatever reason you decide to change hosting for your code, you break *everybody* who depended on it, which is mean :( So ideally, you'd store your code in a domain of your own. This is the same principle behind the [Java package naming convention](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html). 

Basically, when one runs `go get sbrubbles.org/go/nexus`, `go get` needs to understand that the code is actually at `https://github.com/hanjos/nexus`. The vanity import link above provides the official explanation on how this works, But, in a nutshell, `go get` developed a little protocol to find and retrieve your code:
1. If it's in one of the blessed VCS hosting sites (GitHub, Bitbucket, Launchpad and IBM DevOps Services, of all things), everything Just Works&trade;. 
2. If it's in a non-blessed VCS hosting site, you can still use it, but you'll need to use an import path like `repository.vcs/path`. The `.vcs` indicates which VCS you're using, and separates the root of the repo from the path where your package is.
3. Otherwise, `go get` will try to `GET` an HTML document at the given import path, which will tell it where the actual code is. 

This HTML document should have a `<meta>` element like this: 

{% highlight html %}
<meta name="go-import" content="import-prefix vcs repo-root">
{% endhighlight %} 

`import-prefix` is the root of the import path, which represents the "repository" in Go code. `vcs` is, well, the VCS used in the actual hosting. And `repo-root` is the root of the repository where the code actually is. So, for `sbrubbles.org/go/nexus`, the `<meta>` is 

{% highlight html %}
<meta name="go-import" content="sbrubbles.org/go/nexus git https://github.com/hanjos/nexus">
{% endhighlight %} 

Subpackages of `sbrubbles.org/go/nexus` should use the exact same `<meta>`, since they're all rooted in the same "repository". Don't go crazy on the HTML; Go uses an [XML parser](https://github.com/golang/go/blob/1102616/src/cmd/go/internal/get/discovery.go#L32) to extract the `<meta>`, which means it may choke on CSS or JavaScript. The examples I've seen basically redirect to browser to the package's documentation on [GoDoc](https://godoc.org/), in the eventuality of somebody pointing a browser there.

IMHO it's quite an elegant and decentralized solution. But this means there may be two different import paths to the same code, which may lead to code duplication and `init` hell. The solution to avoid that is to use [import comments](https://golang.org/cmd/go/#hdr-Import_path_checking), which is how one informs Go what is the official import path to use.

After all of that being said... 

Now that Go is getting [modules](https://blog.golang.org/modules2019), some of this might change. I may need to revisit the code...