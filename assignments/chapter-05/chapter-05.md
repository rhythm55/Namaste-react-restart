Q: What is the difference between Named export, Default export, and * as export?

A:
ES6 provides us to import & export a module and use it in other files. 
ES6 provides two ways to export a module from a file -

1. named export : one can have multiple named exports per file. for importing we use {}
```
file1.js //exporting
export const MyComponent = () => {}
export const MyComponent2 = () => {}

file2.js //importing
import { MyComponent } from "./file1";
```
2. default export :  can have only one default export per file
```
file1.js //exporting
const MyComponent = () => {}
export default MyComponent;

file2.js //importing
import MyComponent from "./MyComponent";
```

3. * as export, it is used to import the whole module as a component
```
file1.js //exporting
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}

file2.js //importing
import * as MainComponents from "./MyComponent";
<MainComponents.MyComponent />
```

***


Q:What is the importance of config.js file?

A:
essentially editable text files that are designed to be user configurable
often uses a key and a value

```
config.js
layout: 'row';
wrap: 'true'
```
***

Q: What are React Hooks?

A
- React Hooks are simple JavaScript functions that let you use React features without writing a class.
- Hooks can be stateful and can manage side-effects

***

Q: Why do we need useState Hook?

A:
- useState hook is used to maintain the state in our React application.
- Normal utility js function
- spatial variable in react
- Constantly watches this variable for a change via set method
- whenever a change is found react start reconcialiation algorithm

- how to import
```
import React, { useState } from "react";
```

- how to create
```
const [state, setState] = useState(initialstate);
```

***

Q:What is React Fiber?

A:
- React is doing efficient DOM manipulation
- How? using Virtual DOM
- Efficently find diff using diff algorithm then updates actual DOM

React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler(algo used to diff one tree with another) for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance

***

Q: What is Reconciliation in React?
A:
Diff algorithm
Finds out the diff between old virtual DOM and new virtual DOM
Accordinlgy updates the Actual DOM
Finding out diff between two js objects is fast as compared to diff between actual DOMs
keeps data layer and ui layer in sink

Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. 

React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) 
when there's an update of components. React stores a copy of Browser DOM which is called `Virtual DOM`. 
When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. 

React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

***