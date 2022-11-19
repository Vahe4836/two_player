import { useState } from "react";
import './Main.scss';



export default function Main() {


    const [redScore, setRedScore] = useState(10);
    const [blueScore, setBlueScore] = useState(10);

    return (
        <div className="main_div">

            <div className='red_div'
                style={{ height: `${redScore * 4}vh` }}
                onClick={() => {

                    if (redScore < 20) {
                        setRedScore(redScore + 1);
                        setBlueScore(blueScore - 1);
                    }

                }}>
                <div className='red_zone_text_div'>
                    {
                        redScore > 0 && <p className='red_zone_text'>
                            Red {
                                redScore >= 20 ?
                                    <span>is win</span> :
                                    <span> zone {redScore}</span>
                            }
                        </p>
                    }
                </div>
            </div>



            <div className='blue_div'
                style={{ height: `${blueScore * 4}vh` }}
                onClick={() => { 

                    if (blueScore < 20) {
                        setBlueScore(blueScore + 1);
                        setRedScore(redScore - 1);
                    }

                }}>
                <div className='blue_zone_text_div'>
                    {
                        blueScore > 0 && <p className='blue_zone_text'>
                            Blue {
                                blueScore >= 20 ?
                                    <span>is win</span> :
                                    <span> zone {blueScore}</span>
                            }
                        </p>
                    }
                </div>
            </div>

        </div>
    )
}