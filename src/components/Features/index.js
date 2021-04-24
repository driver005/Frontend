import React from 'react'
import { Containerflex, Contenth2, Featuressection, H2span, Leftblur, Paragraph, Rightblur, Titlewrap } from './styles'
import Wrap from './Wrap'

import Leftblurnormal from '../../images/features/left_blur.png'
import Leftblur500 from '../../images/features/left_blur500.png'
import Leftblur800 from '../../images/features/left_blur800.png'
import Leftblur1080 from '../../images/features/left_blur1080.png'
import Leftblur1244 from '../../images/features/left_blur1244.png'

import example from '../../images/features/example-01.svg'
import brush from '../../images/features/brush-01.svg'

import Rightblurnormal from '../../images/features/right_blur.png'
import Rightblur500 from '../../images/features/right_blur500.png'
import Rightblur591 from '../../images/features/right_blur591.png'

const Features = () => {
    return (
        <Featuressection>
            <Leftblur 
                src={Leftblurnormal}
                width="424" 
                sizes="(max-width: 479px) 100vw, 424px" 
                srcset={`
                    ${Leftblur500} 500w, 
                    ${Leftblur800} 800w, 
                    ${Leftblur1080} 1080w, 
                    ${Leftblur1244} 1244w`}
                    alt="" 
            />
            <Containerflex>
                <Titlewrap>
                    <Contenth2>
                        {"Compete in Robotis "}
                        <H2span>{"Olympics"}</H2span>
                    </Contenth2>
                </Titlewrap>
                <Paragraph>
                    {"Test your skills in competition where robots solve world changing tasks"}
                </Paragraph>
                <Wrap 
                    overline={"Competition Info"} 
                    title_1={"WRO in cooperation"} 
                    title_2={"with the robotic club"}
                    paragraph={" Learn the basic of programming with the easy software of Lego Mindstorms and compete in an world width Olympiad"}
                    image={example}
                    ribbon={brush}
                />
                <Wrap 
                    className={"reverse-wrap"}
                    overline={"Competition Info"} 
                    title_1={"KI competition"} 
                    title_2={"BW-KI"}
                    paragraph={"Support your dream with Ai and test your programming skills in a competition from the federal state Baden-Württemberg"}
                    image={example}
                    ribbon={brush}
                />
                <Wrap 
                    overline={"Competition Info"} 
                    title_1={"Robotic competition"} 
                    title_2={"VEX Robotics"}
                    paragraph={"VEX Robotics is also a world width competition like the WRO with huge robots who need to push obstacles over an 2m game board controlled by the player"}
                    image={example}
                    ribbon={brush}
                />
            </Containerflex>
            <Rightblur 
                src={Rightblurnormal}
                width="424" 
                sizes="(max-width: 479px) 100vw, 424px" 
                srcset={`
                    ${Rightblur500} 500w, 
                    ${Rightblur591} 591w`}
                    alt=""
            />
        </Featuressection>
    )
}

export default Features
