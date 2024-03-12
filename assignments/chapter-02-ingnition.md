Q: What is NPM

A:

- stands for Node package Manager
- allows to easily install , manage and share packages of code
- used to manage node packages
- standard repository for all packages
```
npm init // creates package.json
```

***

Q: What is `Parcel/Webpack` ? Why do we need it?

A: 

- Both are bundlers for JS application
- Power our app with different functionalities

- Parcel Features:
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
    - installaiton
```
npm install -D parcel       // -D used for development dependency
```

- Parcel command 
    - For development build
        ```
        npx parcel <entry_point>  // can be index.html
        ```

    - For prod build
        ```
            npx parcel build <entry_point>  
        ```

***

Q: What is .parcel-cache

A: 

- used by parcel bundler to reduce build time
- when you build your application for first time you will notice 
   build took ex: 50ms and a file is generated .parcel-cache
   Next time you build again you will notice the build time will have significant reduce ex: 10ms
- It stores information about your project when parcel builds it, 
so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.

***

Q: What is npx

A: 
- used to execute the node packages
```
npx parcel index.html
```

***

Q: What is the difference bw `dependency` and ` devDependencies`

A: 

- devDependencies
    - used in development phase only
    ex: Parcel
    ```
    npm install -D parcel
    ```

- dependency:
    - used in production phase 
    ex: React
    ```
    npm install react
    ```

***

Q: What is Tree shaking

A: 
- comes from the concept of shaking a tree to remove dead leaves, leaving only the necessary branches and leaves
- it is a technique used in JavaScript development to remove unused code (or "dead code") from the final bundle.
- Tree shaking is important for reducing the size of the final bundle

***

Q: What is Hot Module Replacement

A:
- allows developers to update modules in the browser without a full reload.
- improves the developer experience and speed during development
   as you can see your changes instantly without losing the current state of your application.

***

Q: List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

A:

1. Optimized Output: 
        - uses various techniques like minifcation and Tree shaking
        - helps to reduce the size of the final bundle

2. Built-in Development Server
        - allows you to preview your application as you develop.
        - Hot Module reload make your code reflected instantly

3. Caching while development
        - crates .parcel-cache

4. Zero configuration required
5. Image optimization

***

Q: what is `.gitignore` ? what should we add what should we not

A:

- it is a text file that tells Git which files or folders to ignore in a project during commit to the repository
- we should not add
    - security files having keys ex: .env file
    - files that can be re-genearated
        ex: node-module, /dist
- we should add
    - files that can not be regenerated
    ex: pacakge.json

```
/node_modules
/dist
.parcel-cache
```

Q: What is the difference between package.json and package-lock.json

A:
- `package.json`
    - used to define metadata about the project and its dependencies

- `package-lock.json`
    - file is automatically generated by npm when dependencies are installed 
    - lock down the exact versions of the dependencies installed

***

Q: Why should I not modify package-lock.json?

A: 
- can lead to inconsistencies between the specified versions of dependencies and the actual installed versions.
- difficult to reproduce the exact dependency tree and versions, which can cause issues when deploying or sharing your project.

***

Q: What is node_modules ? Is it a good idea to push that on git?
A:

- is a directory created by npm to store all the dependencies 
- contains all the code that was fetched from npm
- transative dependency :
     - we do npm install parcel - it will have some dependency - which can also have dependency so on

- Don't push node_modulesin github because :
    - it contains lots of files(more than 100 MB), it will cost you memory space.
    - can be regenerated using package.json

***

Q: What is the dist folder?

A: 
- directory commonly used in web development projects to store the final build of the project.
- contains optimized and minified versions of the source code, ready for deployment to a production environment.

***

Q: ^ and ~ in pacakge.json

A:

 - `^` if there is a minor upgrade - next time we do npm i - automatically minor verison will be upgraded
        ex: `^2.3.4^` and new version `2.3.5` is released then it will be installed automatically
- `~` automatically installas major verison
         ex: `^2.3.4^` and new version `4.3.5` is released then it will be installed automatically