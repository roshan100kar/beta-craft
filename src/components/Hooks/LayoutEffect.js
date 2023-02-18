import React, {useEffect, useLayoutEffect} from 'react'

const LayoutEffect = () => {

    useEffect(()=> {
        console.log("User effect is called ...");
    },[]);

    // - to fullfill prerequirement, to set the default values
    useLayoutEffect(()=> {
        console.log("Use Layout effect is called");
    })

  return (
    <div>LayoutEffect</div>
  )
}

export default LayoutEffect