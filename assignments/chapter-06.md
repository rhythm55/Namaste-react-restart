Q: What is Microservice?

A: 
Microservice - also known as the microservice architecture 
- is an architectural and organizational approach to software development
- where software is composed of small independent services like database,
  server or a UI of the application, that communicate over well-defined APIs
- make applications easier to scale and faster to develop
- Benefits of Microservices:
  - Flexible Scaling
  - Easy Deployment
  - Technological Freedom
  - Reusable Code
  - Resilience

***
 
Q: What is Monolith architecture?

A:
- A Monolith architecture is a traditional model of a software program
- one code base that couples all of the business concerns together.
- To make a change to this sort of application requires updating the entire stack by accessing the code base
  and building and deploying an updated version of the service-side interface
- This makes updates restrictive and time-consuming.

***
 
Q: What is the difference between Monolith and Microservice?

A:
- With monolithic architectures, all processes are tightly coupled and run as a single service
- microservices architecture, an application is built as independent components that
  run each application process as a service.

![Screenshot 2024-03-13 at 1 26 46 PM](https://github.com/rhythm55/Namaste-react-restart/assets/36883992/93a32c6b-8c5a-4593-a25a-3199234e8cc8)

***

Q: Why do we need a useEffect Hook?

A:

- useEffect Hook is javascript function provided by react.
- It can be triggered as side effect of say fetch api
- useEffect accepts two arguments, a callback function and a dependency array.
  The second argument is optional.
```
  useEffect(() => { fetchData() }, []);
```

***

Q: What is Optional Chaining?

A:
If the key is not present then instead of a throwing key error, it returns undefined.

***

Q: What is Shimmer UI?

A:

A Shimmer UI resembles the page's actual UI, 
so users will understand how quickly the web or mobile app will load 
even before the content has shown up. 
Shimmer UI is a great way for loading the applications.

***

Q: What is the difference between JS expression and JS statement?

A:
JS expression
- code that produces a value
- It can be a single constant, a variable, or a combination of operators
  and operands that evaluates to a single value. 
```
let x = 5; // Assignment statement with an expression on the right side
let sum = add(3, 4); // Function call with expressions as arguments
return x * 10; // Return statement with an expression
```

JS Expression
- A statement is a larger building block that performs a specific action
-  It can be a single line of code or a block of code containing multiple statements
```
let x; // Variable declaration statement
if (condition) {
    // This is a statement that contains more statements
    x = 5;
}
```

***

Q: What is Conditional Rendering? explain with a code example.

A:

rendering based on a condition
```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
```

***

Q: What is CORS?

A:
- CORS defines a way in which a browser and server can interact to determine
  whether it is safe to allow the cross-origin request.

***

Q: What is async and await?

A:
https://github.com/rhythm55/Namaste-JS?tab=readme-ov-file#async-await

***

Q: What is the use of const json = await data.json(); in getRestaurants()?

A:
- The method returns a promise because we have used await keyword.
  so data.json() returns a promise resolved to a JSON object.












