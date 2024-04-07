### Chapter1 : inception
- [notes](https://github.com/rhythm55/Namaste-react-restart/blob/main/notes/inception.md)
- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/c7fff483a081eb777b078422d306db1e060abc69)
- [assignment](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-01-inception.md)

### Chapter 2: Ignite your app 
- [notes](https://github.com/rhythm55/Namaste-react-restart/blob/main/notes/ignite-your-app.md)
- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/8c1637309a09121123d2f2fc7e1c74acc323f7db)
- [assignment](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-02-ingnition.md)

### Chapter 3 : Foundation
- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/e902c1fa5735e8a089db663eb48f115f208e26d2)
- [assignment - code ](https://github.com/rhythm55/Namaste-react-restart/tree/main/assignments/chapter-03/code)
- [theory - code ](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-03/theory/chapter-03-foundation.md)

### Chapter 4 : Show me the code
- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/74de9fc293b00cf7a8dc6eb3906b42200d5f29e6)
- [assignment - theory ](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-04/chapter-04.md)

### Chapter 5: Hooked

/**
 * Header
 *  -logo
 *  - nav items
 * Body
 *  - search
 *  - restaurantContainer
 *   - restraunt card
 *      - Img
 *      - Name of res, star rating, cusine, delivery time
 * Footer
 *  - copyright
 *  - Links
 *  - address
 *  - contact
 */

- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/9ba84e0a5ee499f9087263f6850456fa38dfa499)
- [assignment - theory ](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-05/chapter-05.md)


### Chapter 6: exploring the world

- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/dea907ec25916258fd886a9bc10c6bfbd8dc1d26)
- [assignment - theory ](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-06.md)

### Chapter 7: Finding the path

- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/99bc87364b9177faf2046e00b74465407b315150)
- [assignment - theory](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-07.md)


### Chapter 8: get classy

- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/7f7e4eee498ea11885666fed5c18b9f408a67b09)
- [assignment - theory](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-08.md)

### Chapter 9: Optimising our app
- [code commit](https://github.com/rhythm55/Namaste-react-restart/commit/eff26adfc54dc354708fc1968f6f2a08633dd8a3)
- [assignment - theory](https://github.com/rhythm55/Namaste-react-restart/blob/main/assignments/chapter-09.md)


***

### forwardRef API and useImperativeHandle Hook

- forwardRef : Lets your component expose a DOM node to parent component with a ref.
     - generally used where parent component needs to access child component node.
     - ex: pause play button are in parent - and child component is responsible for playing video .
     - in above example parent uses forwardRef to access video node and play/pause when user clicks on button
- useImperativeHandle: React Hook that lets you customize the handle exposed as a ref.
    - For example, suppose you don’t want to expose the entire <input> DOM node, but you want to expose two of its methods: focus and scrollIntoView.
 
```
// parentComponent.js
const Parent = () => {
  const childRef = useRef(null);
  const focusChild = () => {
    childRef.current.focus();
  };
  const changeChildBg = () => {
    childRef.current.changeColor();
  };

  return (
    <div>
      <button onClick={() => focusChild()}>Focus child</button>
      <button onClick={() => changeChildBg()}>Change color</button>
      <Child ref={childRef} />
    </div>
  );
};
```

```
//childComponent.js
const Child = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      changeColor() {
        inputRef.current.style.backgroundColor = "orange";
      },
    };
  });
  return <input type="text" ref={inputRef} />;
});
```
