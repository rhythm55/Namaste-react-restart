# Notes
2 PHASES of class component lifecylce - 

    1. RENDER PHASE
    2. COMMIT PHASE

![Screenshot 2024-03-15 at 4 05 09 PM](https://github.com/rhythm55/Namaste-react-restart/assets/36883992/29bd3481-bf11-4a9d-a104-7a5f34a6afa9)

-parent child case :
```
- parent constructor
- parent render
- child constructor
- child render
- child component did mount
- parent component didmount
```

-parent multiple child:
```
-Parent constructor
-Parent render

    - child1 constructor
    - child1 render

    - child2 constructor
    - child2 render

    <!-- DOM UPDATED IN SINGLE BATCH - react optimisation
    it is done by react as Dom manipulation/updation is expensive 
        react batches the COMMIT PHASE for children
    -->
    - child1 componentDidMount
    - child2 componentDidMount

- Parent componentDidMount
```


***
***

# Assignment :

Q: How do you create Nested Routes react-router-dom configuration?

A:
```
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/contact',
        element: <Contact/>,
        errorElement: <Error/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRoutes}/>)
```

***

Q: Read about createHashRouter, createMemoryRouter from React Router docs.

A:

`createMemoryRouter`
Instead of using the browser's history, a memory router manages its own history stack in memory. 

`createHashRouter` (Using hash URLs is not recommended.)
Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

***

Q: What is the order of life cycle method calls in Class Based Components?

A:

Following is the order of life cycle method in class bases components -
1. constructor
2. render
3. componentDidMount
4. componentDidUpdate
5. componentWillUnmount

***

Q: Why do we use componentDidMount?

A:
- it is a lifecycle method called once component is mounted
- allows us to execute the React code when the component is already placed in the DOM 
- Helpful when we have to call api's or need to update the state

***

Q: Why do we use componentWillUnmount? Show with example.

A:

- `componentWillUnmount` is called before destroying the component.
- useful for the cleanup of the application

example - 
we set a timer inside componentDidMount inside about page
```
  componentDidMount() {
    // console.log("child componentDidMount called");
    this.timer = setInterval(() => {
      console.log("i was called");
    }, 1000);
  }
```
Now ,if we move to other pages like contact or home - counter will still be there
reason is because its a SPA , we are refreshing the components hence setInterval remains intact
Now to cleanup above we can use componentWillUnmount
```
  componentWillUnmount() {
    clearInterval(this.timer);
  }
```
In above as soon as we move to next component say home page - component will be destoryed
before destorying componentWillUnmount will be called and clearInterval executes

***

Q: (Research) Why do we use super(props) in constructor?

A:

- super(props) is used to inherit the properties and access of variables 
 of the React parent class when we initialize our component.
- The main difference between super() and super(props) is the this.props
 is undefined in child's constructor in super()
 but this.props contains the passed props if super(props) is used.

***

Q: (Research) Why can't we have the callback function of useEffect async?

A: 

useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted)
. If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.

