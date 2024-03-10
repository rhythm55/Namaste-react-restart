### NPM
- Node Pacakge Manager
- used to manage node packages
- standard repository for all packages

### pacakge.json
- configuration for npm
- it keeps a track of what vesrion was installed
- bundler - web-pack/parcel
    `npm install -D parcel ` // Dev depenedency 
    - there are two types of dependency
        1. Dev dependency - used in development phase
        2. Normal dependency - used in prod phase 
- `^` and `tilde` in pacakge version
    - `^` if there is a minor upgrade - next time we do npm i - automatically minor verison will be upgraded
        ex: `^2.3.4^` and new version `2.3.5` is released then it will be installed automatically
    - `~` automatically installas major verison
- if we have package.json and package-lock.json we can re create the node modules - not required to push node modules

#### pacakge-lock.json
- keeps track of exact version that was installed
- veresion: 2.3.4 // no ^ or ~ here just exact version
- integrity is also maintained per dependency 
    - it is a hash with which it can be verified if same dependency is available on prod or not 


### node modules
- contains all the code that was fetched from npm
- transative dependency :
     - we do npm install parcel - it will have some dependency - which can also have dependency so on

### NPX

```
npx parcel index.html
```
NPX: means executing of a package


### Igniting our app

 - improting of react
    ```
        import React from "react"; // here we are importing React from node module "react"
    ```

***

### Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement // automatically updates browser window if any change is made
- Faster Builds - Caching // when we build our project parcel caches the files in .parcel-cache
- Image optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code splitting
- Differential Bundling // gives support for older browser
- Tree shaking // remove unused code