import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from "prop-types";

const CardCharacter = ({character}) => {

    const name = character.attributes.name
    const id = character.id

    const setImg = (img) => {
        if(img !== null){
            return img
        }else{
            return "/images/cards/img.png"
        }
    }

    return (
        <div className={"m-2"}>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={name}
                    subheader={id}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={setImg(character.attributes.image)}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <b>type: </b>{character.type}<br/>
                    </Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="body2" color="text.secondary">Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">
                            <b>slug: </b> {character.attributes.slug}<br/>
                            <b>name: </b> {character.attributes.name}<br/>
                            <b>born: </b> {character.attributes.born}<br/>
                            <b>died: </b> {character.attributes.died}<br/>
                            <b>gender: </b>{character.attributes.gender}<br/>
                            <b>species: </b> {character.attributes.species}<br/>
                            <b>height: </b> {character.attributes.height}<br/>
                            <b>weight: </b> {character.attributes.weight}<br/>
                            <b>hair_color: </b> {character.attributes.hair_color}<br/>
                            <b>eye_color: </b> {character.attributes.eye_color}<br/>
                            <b>skin_color: </b> {character.attributes.skin_color}<br/>
                            <b>blood_status: </b> {character.attributes.blood_status}<br/>
                            <b>marital_status: </b> {character.attributes.marital_status}<br/>
                            <b>nationality: </b> {character.attributes.nationality}<br/>
                            <b>animagus: </b> {character.attributes.animagus}<br/>
                            <b>boggart: </b> {character.attributes.boggart}<br/>
                            <b>house: </b> {character.attributes.house}<br/>
                            <b>patronus: </b> {character.attributes.patronus}<br/>
                            <b>alias_names: </b> {character.attributes.alias_names}<br/>
                            <b>family_members: </b> {character.attributes.family_members}<br/>
                            <b>jobs: </b> {character.attributes.jobs}<br/>
                            <b>romances: </b> {character.attributes.romances}<br/>
                            <b>titles: </b> {character.attributes.titles}<br/>
                            <b>wands: </b> {character.attributes.wands}<br/>
                            <b>image: </b> {character.attributes.image}<br/>
                            <b>wiki: </b> {character.attributes.wiki}<br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </div>
    );
};

CardCharacter.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        attributes: PropTypes.shape({
            slug: PropTypes.string,
            name: PropTypes.string,
            born: PropTypes.string,
            died: PropTypes.string,
            gender: PropTypes.string,
            species: PropTypes.string,
            height: PropTypes.string,
            weight: PropTypes.string,
            hair_color: PropTypes.string,
            eye_color: PropTypes.string,
            skin_color: PropTypes.string,
            blood_status: PropTypes.string,
            marital_status: PropTypes.string,
            nationality: PropTypes.string,
            animagus: PropTypes.string,
            boggart: PropTypes.string,
            house: PropTypes.string,
            patronus: PropTypes.arrayOf(PropTypes.string),
            alias_names: PropTypes.arrayOf(PropTypes.string),
            family_members: PropTypes.arrayOf(PropTypes.string),
            jobs: PropTypes.arrayOf(PropTypes.string),
            romances: PropTypes.arrayOf(PropTypes.string),
            titles: PropTypes.arrayOf(PropTypes.string),
            wands: PropTypes.arrayOf(PropTypes.string),
            image: PropTypes.string,
            wiki: PropTypes.string,
        }).isRequired,
    }).isRequired
}

export default CardCharacter;
