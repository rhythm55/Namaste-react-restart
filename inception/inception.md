# Inception

#### createElement :
- it creates a React Element which is js object
- accepts 3 parameters
  1. tag name ex: h1 // name of the tag
  2. object- contains attributes to be applied on h1
  3. inner content of tag or children of tag
  ex
  ```
  const heading = React.createElement('h1',{id:'heading'}, 'hello from react');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(heading)      //anything which was under root htmlelement will be replaced by react render
  ```
  
- in above example `render` method is converting the react element to h1 tag and add it inside root element.

- Above method to create html elements in react will have very messy non-readable if we have to develop complex html strucuture.

- we can use react in very small component/section as well like here we only used inside root
