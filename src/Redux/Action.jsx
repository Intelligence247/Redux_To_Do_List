export const increase = () =>{
    return{
        type: "INCREMENT"
    };
};

export const decrease = () =>{
    return {
        type: "DECREMENT"
    };
};

export const reset = () =>{
    return {
        type: "RESET"
    }
}

export const addtwo = () => {
    return{
         type: "ADD2"
    }
}


/*  <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={() => distpatch(increase())}>increase</button>
        <button onClick={() => distpatch(decrease())}>decrease</button>
        <button onClick={() => distpatch(reset())}>reset</button>
        <button onClick={() => distpatch(addtwo())}>AddTwo</button> */ 