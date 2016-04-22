# Angular Electron Boiler Plate (flareon)
![flareon](http://cdn.bulbagarden.net/upload/a/a1/Spr_3r_136.png)
![vaporeon](http://cdn.bulbagarden.net/upload/9/98/Spr_3r_134.png)
![jolteon](http://cdn.bulbagarden.net/upload/c/c1/Spr_5b_135.png)

Babel + Electron + Angular + Browserify + Sass application stack. Takes care of the normal project setup grind, so you don't have too. Get working on your Angular Desktop Application sooner and with less hassle.

![moving picture](http://i.imgur.com/WkZ19h9.gif)

## What project setup grind are you talking about?

- Build your app with one command.
- Open a live-reloading instance of your app with a single command.
- Lint your application using a different command.

## How to get started
Check the version of node you are running and ensure it is at least 4.2.4 or newer.

The specialized `git clone` command and following `rm -rf .git` ensure that the git history of this project is not replicated so that you can enter your new project and `git init` a new project with new remotes, new history, etc. `gulp-cli` is required to run gulp and `electron-prebuilt` is installed to be able to test your project locally without `gulp package` every time (via `gulp serve`).

You may also want to `rm -rf` this README.md after you're all set up and replace it with the README for your project.

```
npm install -g gulp-cli electron-prebuilt
git clone --depth=1 --branch=master https://github.com/vulpino/jolteon my-jolteon-project
cd my-jolteon-project
rm -rf .git
npm install
gulp serve
```

### If you're on windows... (I've never actually had a problem with this.)

`gulp package-osx` will fail because symlinks. Sorry. Blame gulp-atom-electron.

## Directory Structure

- Your client HTML lives in app/templates/.
- Your client javascript lives in app/js/.
- Your client angular controllers/directives/services live in app/js/(controllers/directives/services) respectively 
- Your client SCSS lives in app/scss.
- Your electron server code lives in src/.
- [Probably not true] Everything is programmed using Javascript, the new, cool kind (ES2015).

### Building

- Build the client and server bundles: `gulp build`
- Watch app/ and src/ for changes and update build/ automagically: `gulp watch`
- Lint everything (We use StandardJS, but you can modify the .eslintrc): `gulp lint`
- Open up the app: `gulp serve`. This will also live reload everything, so don't worry about that.
- Package the app for release: `gulp package`.

### Credits && Shoutouts
Big thanks to Kyle Fahringer (https://github.com/vulpino) for the original version that is built around React which you can find https://github.com/vulpino/jolteon
