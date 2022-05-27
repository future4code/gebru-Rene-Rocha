import React, { useState, useEffect} from "react";
import axios from "axios";

function CharacterDetailsPage(props){
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails()

    }, [props.url])

    useEffect(() => {
        getPlanetDetails()

    }, [details.homeworld])

    function getCharacterDetails(){
        axios.get(props.url)
        .then((response) => {
            console.log(response.data) 
            setDetails(response.data)
        })
        .catch((error) => console.log(error.message))
    }
    function getPlanetDetails(){
        axios.get(details.homeworld).then((response)=>{
            console.log(response.data)
            setPlanet(response.data)
            .catch((error) => console.log(error.message))
        })
    }
    return(
    <div>
        <h1>Detalhes de personagens</h1>
        {details.name && planet.name ? 
            <div>
                <p>Nome:{details.name}  </p>
                <p>Planeta de Origem: <button>{planet.name}</button></p>
            </div>:
            <p>Carregando...</p> 
        
        }
      
        <button onClick={props.goToListPage}>Voltar</button>
    </div>
    )
}
export default CharacterDetailsPage