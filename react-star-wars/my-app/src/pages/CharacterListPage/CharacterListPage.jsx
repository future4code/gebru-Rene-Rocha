import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../constants/urls";
import { CharacterCard } from "./styled";


function CharacterListPage(props){
    const [characterList, setCharacterList] = useState([])
    useEffect(() =>{
        getCharacterList()
    }, [])
    
    function getCharacterList(){
        axios.get(`${BASE_URL}/people/`)
            .then((response)=> setCharacterList(response.data.results))
            .catch((error)=> console.log("Erro:", error.message))
    }
    function showCharacters(){
        return characterList.map((character, index)=>{
            return <CharacterCard onClick={()=>props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
        })
    }

    return (<div>
        <h1>Lista de personagens</h1>
        {showCharacters()}
        </div>)
}

export default CharacterListPage