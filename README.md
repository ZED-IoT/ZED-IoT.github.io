# zed

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
In general this command should work but you need bash to run this (git bash also works).
If windows is configured correct then it will open the default application.

On Linux:
```
.deploy/build.sh
```
On Windows:
```
.deploy\build.sh
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### To host latest updates
```
npm run build
copy and replace all files from /dist to /docs
```
