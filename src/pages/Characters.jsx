import PersonalizedCard from "../components/PersonalizedCard.jsx";
import {useEffect, useState} from "react";
import instance from "../../config/axios.js";
import {Grid} from "@mui/material";



const Characters = () => {

    var personajes = [];

    const [characters, setCharacters] = useState(personajes);
    const axios = instance

    useEffect(() => {
        setCharacters(personajes)
        getCharacters()
    }, []);

    const getCharacters = async () => {
        try {
            const response = await axios.get("v1/characters");
            setCharacters(response.data.data)
        }catch (e) {
            console.log(e)
        }
    }

    const renderCharacter = () =>{
        return characters.map((character, index) =>
            <Grid item xs={2} sm={4} md={4} key={index} >
                <PersonalizedCard key={character.id} dataObject={character}></PersonalizedCard>
            </Grid>
        )
    }

    return (
        <div>
            <Grid container spacing={{sm:2,         md:3}} columns={{ xs: 4, sm: 8, md: 16 }}>
                {renderCharacter()}
            </Grid>
        </div>
    );
};

export default Characters;
