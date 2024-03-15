- whenever the class is intantiated constructor is called i,e new instance of class is created
- after that render method is called

constructor - render - componentDidMount

componentDidMount 
- used to make api call ()

2 PHASES - 
    1. RENDER PHASE
    2. COMMIT PHASE

-parent child case :
- parent constructore - parent render - child constructor - child render - child component did mount - parent component didmount

-parent multiple child:

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
