Q: is jsx mandatory for React?

A:
jsx is not mandatory - we can use React.CreateElement as well.
we use jsx because of readability and managability

***
Q:  Is ES6 mandatory for React?

A: 
ES6 is not mandatory for React but is highly recommendable.
provides a lot of good features like - let,const,arrow functions, classes

***

Q: How can I write comments in JSX?
A: 

{/*  */} - for single or multiline comments
```
  {/* this is a comment */}
  {/*
         this 
        is a 
        comment
         */}
```

***

Q: What is <React.Fragment></React.Fragment> and <></>?

A:

- <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements
 from a React component by allowing you to group a list of children without adding extra nodes to the DOM.

- <></> is the shorthand tag for React.Fragment

- The only difference between them is that the shorthand version does not support key and props

```
// Using the empty tag shorthand
const ComponentWithEmptyTag = () => (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);

<React.Fragment key={fragmentKey} className="my-fragment">
  {/* Children elements */}
</React.Fragment>
```

***

Q: What is Reconciliation in React?
A:
Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. 

React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) 
when there's an update of components. React stores a copy of Browser DOM which is called `Virtual DOM`. 
When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. 

React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

***
Q:What is React Fiber?

A:
React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance

***

Q: Why do we need keys in React?
A:

warning: each child in the list should have unique key property
whenever you are looping over a list - always give a unique key
why ?
when there are components on same level they needs to be uniquely represented
consider a new item is added in the list - react will exactly know 
items with key that already existed, so that means only new item needs to be rendered
If we dont use key
- react wont know which item is added , so whole list will be rendered causing big hit on performance

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

***

Q: Can we use index as keys in React?

A: 
- Yes but its a bad practice
- never use index as key - bad practice - as index might change

***

Q: What is props in React? Ways to.
A:

- props stands for properties.
- props are just like normal arguments to a function
```
function App() {
  return (
    <div className="App">
      <RestrauntCard restrauntName="donuts" /> // restrauntName is props
    </div>
  )
}
```

***

Q: What is Config Driven UI?

A:
- design approach where the user interface of an application is largely 
defined and controlled by configuration rather than hard-coded logic

- In a config-driven UI, various aspects of the UI, 
such as layout, styling, and behavior, are specified in configuration 
files or data structures that can be easily modified without changing the underlying code.

***
