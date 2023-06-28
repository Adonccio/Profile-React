import { useState } from 'react'
import '../Card.css'
import Title from './Title'

export default function Card (prop) {
    let [ButtonContent, SetButtonContent] = useState("Seguir")

    function MudarBotao () {
        if (ButtonContent === "Seguir") {console.log('Seguindo')
        SetButtonContent ("Seguindo")} 
        else {
            SetButtonContent("Seguir")
        }
    }
    return (
        <div id='card'>
            <img src={prop.img}  alt="" />
            <Title>
                
                {prop.name}
                <button onClick={MudarBotao}> 
                {ButtonContent}
                </button>
            </Title>
            <hr />
            <p>{prop.bio}</p>
            <hr />
            <p>{prop.phone}</p>
            <hr />
            <p>{prop.email}</p>
            <hr />
            <div id='buttons'>
                <button onClick={() => alert('Going to Github!')}><a target='_blank' href={prop.git}>GitHub</a></button>
                <button onClick={() => alert('Going to Instagram!')}><a target='_blank' href={prop.instagram}>Instagram</a></button>
            </div>
        </div>
    )
}