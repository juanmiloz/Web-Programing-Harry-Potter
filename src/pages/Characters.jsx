import CardCharacter from "../components/CardCharacter.jsx";
import {useEffect, useState} from "react";
import instance from "../config/axios.js";



const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const axios = instance

    useEffect(() => {
        getCharacters()
    }, []);

    const getCharacters = async () => {
        try {
            const response = await axios.get("v1/characters")
            setCharacters(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    const renderCharacter = () =>{
        return characters.map((character) =>
            <CardCharacter key={character.id} character={character}></CardCharacter>
        )
    }

    return (
        <div>
            {renderCharacter()}
        </div>
    );
};

export default Characters;
