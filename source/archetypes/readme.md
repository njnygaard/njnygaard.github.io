# My Personal Static Site
## Commands

Firstly, make sure you are in the `source/` directory. I add the content in there, and serve from one level up. I don't know why that isn't the default configuration.

I might want to have a personal repo and a deploy repo in the future, but this is a short-term solution anyways.

### Make a new post with a specific name.
```
hugo new post/testing-markdown-syntax.md
```
### Test the changes locally
```
hugo serve
```
### Build your new post
```
hugo
```
>Note: make sure you mark the meta `draft` tag at the top of the post to `false`.