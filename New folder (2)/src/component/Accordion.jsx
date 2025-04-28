import React, { useState } from 'react'
import Collapse from './Collapse';

const Accordion = () => {
   

    const data = [
        {id: 1, title: "What's react?", description: "description 1" },
        {id: 2, title: "what does useeffect do? ", description: "description 2" },
        {id: 3, title: "What is a component?", description: "description 3" }
     
    ]



  return (
    <div>
        <h1>FAQ</h1>
        {data.map(data=>(
            <div>
                {/* <h3>{data.title}</h3>
                <div onClick={(id)=>getDEscription(id)}>+</div> */}
                <Collapse key={data.id} data={data}/>

            </div>
        ))}

    </div>
  )
}

export default Accordion