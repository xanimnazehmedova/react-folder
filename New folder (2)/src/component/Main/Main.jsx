import React, { use, useEffect, useState } from 'react'
import "./Main.css"
import About from '../About/About'
const Main = () => {
  const [cards, setCards] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchCards = async ()=>{
    setLoading(true)

    try {
      const response = await fetch("http://localhost:3000/cards")
      const data = await response.json()
      setCards(data)
    } catch (error) {
     console.log(error); 
    }finally{
     setLoading(false)
    }
  }
useEffect(()=>{fetchCards()},[])



  return (

    <div>
    <section id="section-1">
    <div class="heading"> <h2> We Offer the Best Services</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis!</p>
     </div>

{loading ? ( <p>loadingg...</p>) : (<div class="cards">{cards.map(card => ( 
 <div class="card" key={card.id}>
   <h5>{card.title}</h5>
  <p >{card.text}</p>
  <button class="detail-btn">Get More Info</button>
 </div>
))}</div>)}
     {/* <div>


        <div class="cards">
        {cards.map(card => (
         <div class="card">
           <h5>{card.title}</h5> 
           <p>{card.text}</p>
           <button class="detail-btn"> Wiev Details</button>
         </div>
        ))}
        </div>
     </div> */}
    </section>
    <section>
      <About/>
    </section>
    </div>
   
  )
}

export default Main