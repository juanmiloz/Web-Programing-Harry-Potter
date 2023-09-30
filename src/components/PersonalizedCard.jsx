import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    styled,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from "prop-types";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {useEffect, useState} from "react";
import {getURLFile, uploadFile} from "../firebase/firebase.jsx";

const PersonalizedCard = ({dataObject}) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const name = dataObject.attributes.name
    const id = dataObject.id
    const [file, setFile] = useState(null);
    const [image, setImage] = useState("");

    const setImg = (img, type) => {
        if (img !== null && img !== undefined) {
            return img
        } else if (type === "character") {
            return "/images/cards/character.png"
        } else if (type === "movie") {
            return "/images/cards/movie.png"
        } else if (type === "potion") {
            return "/images/cards/potion.png"
        }
    }

    useEffect(() => {
        if(file!=null) {
            uploadFile(file).then( async (res) =>{
                let url = await getURLFile(res.metadata.name)
                setImage(url)
            })
        }
    }, [file]);

    useEffect(() => {
        setImage(setImg(dataObject.attributes.image, dataObject.type))
    }, []);

    const changePicture = (e) => {
        if(e.target.files){
            setFile(e.target.files[0])
        }
    }

    return (
        <div className={"m-2"}>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    action={dataObject.type === "character" &&
                        <Button component="label"  style={{margin: 0, padding: 0}}>
                            <CloudUploadIcon style={{margin: 0, padding: 0}}/>
                            <VisuallyHiddenInput type="file" onChange={changePicture}/>
                        </Button>
                    }
                    title={name}
                    subheader={id}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <b>type: </b>{dataObject.type}<br/>
                    </Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="body1" color="text.primary">Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'} variant="body2" color="text.secondary">
                            {
                                Object.keys(dataObject.attributes).map(key => {
                                    const value = dataObject.attributes[key]
                                    if (value !== null) {
                                        return (
                                            <div key={key}>
                                                <b>{key}: </b>{value}
                                            </div>)
                                    }
                                    return null
                                })
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </div>
    );
};

PersonalizedCard.propTypes = {
    dataObject: PropTypes.shape({
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
            patronus: PropTypes.string,
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

export default PersonalizedCard;
