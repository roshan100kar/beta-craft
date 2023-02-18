import React, { useEffect, useRef } from 'react'

const RefHook = () => {
    const inputref = useRef(null);
    const inputref2 = useRef(null);

    useEffect(()=> {
        console.log(inputref);
        inputref.current.value="First Name";
        inputref2.current.value="Last Name";
        // inputref.current.autofocus = true;

    }, []);

    const handleClick = ()=> {
        inputref.current.focus();
        inputref2.current.focus();
    };

    const handleSubmit = ()=> {
        console.log("First Name : ", inputref.current.value);
        console.log("Last Name : ", inputref2.current.value);
    };

  return (
    <div>
        RefHook.
        <input type="text" ref={inputref} />
        <input type="text" ref={inputref2} />
        <button onClick={handleClick}>Focus</button>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default RefHook