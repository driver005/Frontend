import React, { useEffect, useState } from 'react'
import AnimatedNavbar from '../../common/AnimatedNavbar';
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
import { useTranslation } from 'react-i18next';


function Header() {
    const [isShown, setIsShown] = useState(true);
    const [Duration, setDuration] = useState(300);
  
    const isNotMobile = useMediaQuery({
      query: '(max-width: 767px)',
    });

    const onChange = data => {
        setDuration(data)
    }

    const { t } = useTranslation();

    return (
        <Headercontainer className="header">
            <AnimatedNavbar duration={Duration} />
            <Containerflex>
                <Containerflexcomponent>
                    {
                        //<Herooverline className={isShown ? 'load' : 'hide'} >What is the</Herooverline>
                    }
                    <Heroh1 className={isShown ? 'load' : 'hide'}>TECLAB</Heroh1>
                    <Heroparagraph className={isShown ? 'load' : 'hide'} >{t(`home.header.description`)}</Heroparagraph>
                  <Herobutton href={"/projects"} className={isShown ? 'load' : 'hide'}>{t(`home.header.link`)}</Herobutton>
                </Containerflexcomponent>
            </Containerflex>
            {isNotMobile && <ArrowBounce />}
        </Headercontainer>
    )
}

export default Header
