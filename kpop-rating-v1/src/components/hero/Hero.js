import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({kpops}) =>{

    const navigate = useNavigate();

    function reviews(kpopId)
    {
        navigate(`/Reviews/${kpopId}`);
    }


    return (
        <div className = 'kpop-carousel-container'>
            <Carousel>
            {
                    kpops?.map((kpop) => {
                        return(
                            <Paper>
                                <div className = 'kpop-card-container'>
                                    <div className="kpop-card" style={{"--img": `url(${kpop.backdrops[0]})`}}>
                                        <div className = 'kpop-detail'>
                                            <div className = 'kpop-poster'> 
                                                <img src={kpop.poster} alt=""/>
                                            </div>
                                            <div className = "kpop-title">
                                                <h4> {kpop.title}</h4>
                                            </div>
                                            <div className="kpop-buttons-container">
                                                <Link to={`/Trailer/${kpop.trailerLink.substring(kpop.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className="play-button-icon"
                                                            icon = {faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>

                                                <div className="kpop-review-button-container">
                                                    <Button variant ="info" onClick={() => reviews(kpop.imdbId)} >Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero