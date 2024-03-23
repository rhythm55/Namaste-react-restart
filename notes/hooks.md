# useMemo
- lets you cache the result of calculation between re-renders
- It is useful when you have a heavy computation or a costly function call that you want to cache and only recompute when the dependencies change.

```
  const calculateFactorial = useMemo(() => {
    let factorial = 1;
    for (let i = 1; i <= inputValue; i++) {
      factorial *= i;
    }
    return factorial;
  }, [inputValue]);
```

when we don't use memo - even when other state variable is changed our costly operation will run again 
if the operation is very huge it will impact the current working as well (in example you can check how theme is delaying because of re rendering of calculate function)


https://github.com/rhythm55/Namaste-react-restart/assets/36883992/dd1fad7a-8bee-4b3b-bcbc-f11fc340259e


- if we use `useMemo` it will only trigger the operation when dependency array change. it wont re run the costly operation of any other state variable changes. in this case check how theme is still loading fast unlike above case.



https://github.com/rhythm55/Namaste-react-restart/assets/36883992/3c7f5453-3656-439b-86de-90536fc9d768



***

# useCallback
- cache a function definition between re-renders
- consider a scenario where we have to share the callbackfunction as prop to child. Now if anything changes in parent component it will cause re rendering of child component even if changes are not realted.

- parent component
```
  const handleThemeChange = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [setTheme, theme]);

  <ChildDemo onClick={handleThemeChange} />
```

- child component
```
const ChildDemo = memo(({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
});
```

- example - without usecallback - child will re render even if changes are not related


https://github.com/rhythm55/Namaste-react-restart/assets/36883992/ecc2192e-fe1c-459f-8b7b-6179adb0495e


- example - with callback - child will only be re-rendered when callback is triggered



https://github.com/rhythm55/Namaste-react-restart/assets/36883992/815454e5-adce-4f47-b1fe-a50a8137ed9f


- here
  - useCallback: Memoizes a callback function so that it's only re-created when its dependencies change.
  - React.memo: Memoizes a functional component so that it only re-renders when its props change.
    
***

# useRef
- lets you reference a value thats not needed for rendering
