Q: What is JSX

A: 
    - syntax which is easier to create reactElement
    - jsx is not html , not react 
    - it is a HTML like syntax
    - it is transpiled(converted into code that js engine understands) 
        by parcel(babel: js compiler / transpiler) before it reaches JSengine
    - JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render)
    - babel convertes JSX to React.createElement
    - to give attribute inside jsx we need to use camelCase
    - JSX in multiple lines
    ```
    const heading = (<h1 
        id="heading" 
        className="red">
            Namaste using JSX
        </h1>)
    ```

    - JSX prevent cross site scripting ex: `{data}` where data is from attacker - jsx will sanitize it

***

Q: React createElement vs JSX

A: 
- JSX provides more readability.
- Behind the scenes JSX is converted into react.createElement only using babel
- React.createElement
```
const element = React.createElement('div', { className: 'my-class' }, 'Hello, world!');

```

- JSX
```
const element = <div className="my-class">Hello, world!</div>;

```

***

Q: Behind the scenes of JSX

A: JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render)

***

Q: Babel & parcel role in JSX

A: 
Babel is provided by parcel we dont need to install it externally

Babel
- js library
- also converts es6 to old browser understandable conversion
- In case of JSX its responsible to convert JSX into react.CreateElement method

***

Q: super Power of JSX

A: 
- easy to maintain and debug code
- You can write JS in it using `{}`
```
const heading = <h1> my age is {2024-1997} </h1>
```

***

Q: Components

A: 
React Component
2 types:
    1. Class Based Component //old way 
    2. Functional Component // new way

Q: Functional Components

A: 

React Functionl Component
- js function that returns JSX
- should start with capital alphabet
```
const HeadingComponent = () => {
    return <h1 id="heading" className="red">Namaste using JSX2</h1>
}
root.render(<HeadingComponent />)
```

Component Compositon
- composing component inside component
```
const TitleComponent = () => {
  return <h1 id="title">Namaste Title</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent/>
    <h1 id="heading" className="red">
      Namaste using JSX2
    </h1>
  </div>
);
```

***

Q: role of type attribute in script tag? What options can i use there

A:
- tells the browser what type of script is being used so that it can interpret the script correctly.
- common value for the type attribute is text/javascript indicating script is written in js
- `type: module`Indicates that the script is a JavaScript module, 
which allows for modular code organization and import/export statements.
- text/typescript: Indicates that the script is written in TypeScript

***

Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

A:
- `{TitleComponent}` with this we can embed any js variable inside our component
- js variable can contain JSX
```
const TitleEle = <h1> hi </h1>

const TryComponent = () => (
  <div id="container">
    {TitleEle}
  </div>
);
```

- `{<TitleComponent/>}` we can embed component using this inside jsx/component
```
const TitleEle = <h1> hi </h1>

const TryComponent = () => (
  <div id="container">
    {TitleEle}
  </div>
);

const anotherComponent = () => {
    <div>
        {<TitleEle/>}
    </div>
}
```

- `{<TitleComponent></TitleComponent>}`

{<TitleComponent></TitleComponent>} = {<TitleComponent/>}