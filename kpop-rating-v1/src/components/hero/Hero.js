import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({kpops}) =>{
    return (
        <div className = 'kpop-carousel-container'>
            <Carousel>
                {
                    kpops.map({kpop} => {
                        return(
                            <Paper>
                                <div className = 'kpop-card-container'>
                                    <div className = 'kpop-detail'>
                                        <div className = 'kpop-poster'> 
                                            <img src={kpop.poster} alt=""/>
                                        </div>
                                        <div className = "kpop-title">
                                            <h4> {kpop.title}</h4>

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