import React, { useEffect, useState } from 'react'
import AnimatedNavbar from '../../AnimatedNavbar';
import { Containerflex, Followernumber, Headercontainer, HeaderUnderNav, Herobutton, Herographicleft, Herographicright, Heroh1, Heroimageplaceholder, Heroimagewarpper, Herooverline, Heroparagraph, Peoplegroupimage, Profileimageswrapper, Tagspan } from './styles'
import peopleblack from '../../images/people_black.png'
import placeholder from '../../images/placeholder_dash.svg'
import brush from '../../images/brush.svg'
import brush2 from '../../images/brush2.svg'

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
                            <Herooverline className={ isShown ? 'load' : 'hide' } >What is the teclab</Herooverline>
                            <Heroh1 className={ isShown ? 'load' : 'hide' }>TECLAB</Heroh1>
                            <Heroparagraph className={ isShown ? 'load' : 'hide' } >teclab is an place for students too meet and power there dreams</Heroparagraph>
                            <Herobutton href={"/contact"} className={ isShown ? 'load' : 'hide' }>Contact Us</Herobutton>
                        </Containerflex>
                        <Heroimagewarpper className={ isShown ? 'load' : 'hide' }>
                            <Herographicleft src={brush}/>
                            <Herographicright src={brush2} />
                            <Heroimageplaceholder src={placeholder}/>
                            {
                                // <Profileimageswrapper>
                                //     <Peoplegroupimage src={peopleblack} width={"147"}/>
                                //     <Followernumber>
                                //         {"Join our waiting list "}
                                //         <Tagspan>5000+</Tagspan>
                                //     </Followernumber>
                                // </Profileimageswrapper>
                            }
                        </Heroimagewarpper>
            </Headercontainer>
            

    )
}

export default Header
