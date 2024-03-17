Notes-

higher order component
- pure functions
- takes a existing component enhances it and returns the component
- used for enhacing

- UI layer is powered by Data layer


- controlled and uncontrolled component

- lifting the state up : controlling by parent

- props drilling - problem if a lot of heirarchy - we can use useContext - ex logged in user details, theme(light/dark) in all components
- use useContext only at places where data is to be used in multiple components
- react is one way data stream - data flows from parent to child

***
***

Q: What is prop drilling

A:
- When we pass props from parent to child and so on in the hierarchy say 20 level down 
- prop drilling with lots of level is not a good practice - what if prop value gets changed in between
- problem if a lot of heirarchy - we can use useContex

***

Q: What is lifting the state up ?

A:
- In scenario where we want the state of two or more component to always change together we can use lifting the state up concept.
- In this concept we following these steps
  - remove state from both components
  - move it to their closest parent
  - pass it down to them via props
- example
```
//Parrent.js
const [showItemIndex, setShowItemIndex] = useState(0);  // moved state to closest parent

<div>
  {resInfo?.restrauntMenu?.map((menu, index) => (
      <RestaurantCategory
        key={menu.card.card.title}
        data={menu.card.card}
        showItem={showItemIndex === index}               //pass it down to them via props
        setShowItemIndex={() => setShowItemIndex(index)}   
      />
    ))}
</div>


//RestaurantCategory.js
const RestaurantCategory = ({ data, showItem, setShowItemIndex }) => {
  const handleClick = () => {
    setShowItemIndex();  
  };
<div className="accordion" onClick={() => handleClick()}>
    <div className="accordion-body">
      {data.itemCards.map(
        (item) =>
          showItem && (
            <ItemList key={item.card.info.id} item={item.card.info} />
          )
      )}
    </div>
 </div>
```

***

Q: What is context provider and context consumer.

A:
-`context provider`
- If we want to change the value of useContext we can use `context provider`
- the elements which are wrapped inside context.provider will get the updated value defined
- we can also pass setState method as value so that component can also be able to change the value
- example 
```
const [userName, setUserName] = useState("Any");

 <UserContext.Provider value={{ loggedInUserName: userName, setUserName }}>
        <HeaderComponent />
        <Outlet />
      </UserContext.Provider>
```


- `context consumer`
- mainly used if we want to use useContext inside class components as they dont have hooks
- provides a callback method which returns the required context value
- example
```
 <UserContext.Consumer>
    {(data) => <h3>logged in user : {data.loggedInUserName}</h3>}
  </UserContext.Consumer>
```

***
