import React, { useEffect, useState } from 'react'
import AnimatedNavbar from '../../AnimatedNavbar';
import { Containerflex, Followernumber, Headercontainer, HeaderUnderNav, Herobutton, Herographicleft, Herographicright, Heroh1, Heroimageplaceholder, Heroimagewarpper, Herooverline, Heroparagraph, Peoplegroupimage, Profileimageswrapper, Tagspan } from './styles'

function Header() {
    const [isShown, setIsShown] = useState(true);
    const [Duration, setDuration] = useState(300);
    
    const onChange = data => {
        setDuration(data)
    }
    
    return (
            <Headercontainer >
                <AnimatedNavbar duration={Duration} />
                        <Containerflex>
                            <Herooverline className={ isShown ? 'load' : 'hide' } >What is the Teclab</Herooverline>
                            <Heroh1 className={ isShown ? 'load' : 'hide' }>Teclab</Heroh1>
                            <Heroparagraph className={ isShown ? 'load' : 'hide' } >Teclab is an place for students too meet and power there dreams</Heroparagraph>
                            <Herobutton href={"/contact"} className={ isShown ? 'load' : 'hide' }>Contact Us</Herobutton>
                        </Containerflex>
                        <Heroimagewarpper className={ isShown ? 'load' : 'hide' }>
                            <Herographicleft src={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098634e18d0c1b_brush-1.svg"}/>
                            <Herographicright src={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098668ad8d0c15_brush-2.svg"} />
                            <Heroimageplaceholder src={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d80986fdd18d0c33_placeholder-dash.svg"}/>
                            <Profileimageswrapper>
                                <Peoplegroupimage src={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098647b48d0c2a_people%402x.png"} width={"147"}/>
                                <Followernumber>
                                    {"Join our waiting list "}
                                    <Tagspan>5000+</Tagspan>
                                </Followernumber>
                            </Profileimageswrapper>
                        </Heroimagewarpper>
            </Headercontainer>
            

    )
}

export default Header
