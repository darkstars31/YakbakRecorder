# YakBack

Simple Audio Voice Recorder written using Electron/Angular

```
pull down files using git or from the zip folder
npm install -g gulp-cli electron-prebuilt
npm install
gulp serve
```

### Building

- Build the client and server bundles: `gulp build`
- Watch app/ and src/ for changes and update build/ automagically: `gulp watch`
- Lint everything (We use StandardJS, but you can modify the .eslintrc): `gulp lint`
- Open up the app: `gulp serve`. This will also live reload everything, so don't worry about that.
- Package the app for release: `gulp package`.
