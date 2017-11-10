# git-go-get

This is a simple tool that allows you to run the git clone command, but create a directory structure similiar to Go's default structure, where repos are namespaced by their git paths. For instance, running `git-go-get` against this repo would place it at: 

`./github.com/brettneese/git-go-get`


_Bonus:_ If you install this globally (`npm install -g git-go-get`) and add this in your `.bashrc` or `.zshrc`:

```
function git {
  if [[ "$1" == "clone" && "$@" != *"--help"* ]]; then
    shift 1
    git-go-get "$@" /Users/brettneese/Development
  else
    command git "$@"
  fi
}
```

you'll be able to run `git clone` and this tool will ~automatically~ set up a proper directory structure. 

That means all your `git clone`s will go to the same, well-known place on your machine, without changing any of your existing habits. Cool!

N.b: Only for Unix systems, requires `git`.