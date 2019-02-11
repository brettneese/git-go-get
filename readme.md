# git-go-get

This is a simple tool that allows you to run the git clone command, but creates a directory structure similiar to Go's default structure, where repos are namespaced by their git hosts/path. 

For instance, running `git-go-get` against this repo would place it at: 

`./github.com/brettneese/git-go-get`


_Bonus:_ If you install this globally (`npm install -g git-go-get`) and add something like this in your `.bashrc` or `.zshrc`:

```
function git {
  if [[ "$1" == "clone" && "$@" != *"--help"* ]]; then
    shift 1
    git-go-get "$@" /Users/$USERNAME/Development/git
  else
    command git "$@"
  fi
}
```

you'll be able to run `git clone` and this tool will automagically place it in a well-known directory on your machine with a well-known structure that correspeond with the paths in git urls. It will also copy the path to the clipboard so you can easily `cd` into it.

For instance running, `git clone https://github.com/brettneese/git-go-get.git` wherever you are at on your system would place this project at `/users/$USERNAME/Development/git/github.com/brettneese/git-go-get`. 

That means all your `git clone`s will go to the same, well-known place on your machine, without changing any of your existing habits. Cool!

N.b: Only for Unix systems, requires `git`.
