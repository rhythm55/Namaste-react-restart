Q: What are various ways to add images into our Apps? Explain with code examples

A:

- Using the full URL of the image for the web (CDN) or any public images. Example :
```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

- importing the image file
```
import reactLogo from './reactLogo.png';
export default logoComponent = () => {
    return (
        <img src={reactLogo} alt="logo">
    )
}
```

***

Q: What would happen if we do console.log(useState())?

A: 

useState returns an array = [undefined, function]

note: never create state variable inside a condition/for-loop

***

Q: How will useEffect behave in diff scenarios

A:
if no dependency array => useEffect is called on every component render
if the dependency array is empty = [] => useEffect is called on initial render(only called once)
if we have something as dependency array => useEffect is called everytime dependency is changed

***

Q: What is SPA?

A:
it dont reload the page - refreshes the component
A single page web application is a web application that interacts with user dynamically without 
requesting an entire new page from server.

***

Q: What is the difference between Client Side Routing and Server Side Routing?

A:
2 types of routing in web app
1. client side routing - already have the components - load when route is hit
2. server side routing - makes a network call fetches the page and loads it every time new route is hit

***