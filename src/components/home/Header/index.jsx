import React, { useState } from 'react'
import {
    Containerflex,
    Containerflexcomponent,
    Headercontainer,
    Herobutton,
    Heroh1,
    Heroparagraph
} from './styles'
import ArrowBounce from '../Arrow/Bounce';
import { useMediaQuery } from 'react-responsive';


function Header() {
    const [isShown, setIsShown] = useState(true);
  
    const isNotMobile = useMediaQuery({
      query: '(max-width: 767px)',
    });

    return (
        <Headercontainer className="header">
            <Containerflex>
                <Containerflexcomponent>
                    {
                        //<Herooverline className={isShown ? 'load' : 'hide'} >What is the</Herooverline>
                    }
                    <Heroh1 className={isShown ? 'load' : 'hide'}>TECLAB</Heroh1>
                    <Heroparagraph className={isShown ? 'load' : 'hide'} >a place for students to meet and bring their dreams to life</Heroparagraph>
                  <Herobutton href={"/projects"} className={isShown ? 'load' : 'hide'}>View Projects</Herobutton>
                </Containerflexcomponent>
            </Containerflex>
            {isNotMobile && <ArrowBounce />}
        </Headercontainer>
    )
}

export default Header
