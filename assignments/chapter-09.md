# notes

CS principle - single responsibility principle
Modularity - breakdown code in small units 
more reusable - maintainable - testable

custom hooks
hooks are like utility function
seprate files for each hooks

***
***

# Assignments

Q: When and why do we need lazy()?

A: 
- also known as chunking/code splitting / dynamic building / lazy loading / on demand loading / dynamic code
- We want to use lazy loading when we have a large application with a big size. usually e commerece website follows it.
- example: swiggy instamart - can be loaded lazily/on demand. Only load what is required
- With help of lazy loading we are able to split our code in small chunkers which are faster to load.
- when lazy loading is implemented a seprate file in dist is created and loaded when routing hits.
- in below a seprate contact.js is made in dist. when '/contact' is triggered in routing contact.js is loaded.
```
const Contact = lazy(() => import("./components/Contact"));

{
  path: "/contact",
  element: (
    <Suspense fallback="<h1>Loding...</h1>">
      <Contact />
    </Suspense>
  ),
}
```

***

Q: What is suspense?

A: 
- Suspense is component provided by React.
- used as wrapper of component that is to be lazily loaded
- offers a fallback option in which we can pass jsx
- React Suspense is a feature that allows components to suspend rendering
while waiting for some asynchronous operation to complete, such as fetching data.

***

Q: Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error?

A:
- This error occurs in React when a component suspends while responding to synchronous input.
- React Suspense is a feature that allows components to suspend rendering while waiting for some asynchronous operation to complete

***

Q: Advantages and Disadvantages of using this code splitting pattern?

A: 
Advantages
- Improved Performance: By splitting code into smaller chunks and loading them only when needed
- Optimized Resource Usage: Code splitting allows you to load only the necessary resources for a particular view or feature, 
   reducing the overall memory and network bandwidth usage of your application.
- Better User Interaction: you can prioritize rendering critical UI elements first, providing a more responsive and interactive user experience.

Disadvantage:
- Complexity: Implementing code splitting and managing the asynchronous loading of modules can add complexity to your codebase.
- Debugging: It can be harder to trace errors that occur in dynamically loaded modules.


***

Q: When do we and why do we need suspense?

A: 
- React Suspense is used to handle asynchronous operations
- ` It allows components to suspend rendering while waiting for these operations to complete, without blocking the main UI thread. `
- Data Fetching: When fetching data asynchronously, Suspense can be used to suspend rendering until the data is available.
- Code Splitting: Suspense can then be used to suspend rendering until the required code chunks are loaded, 
- Fallback UI: Suspense allows you to define a fallback UI to display while waiting for the asynchronous operation to complete. 














