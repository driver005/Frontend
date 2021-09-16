import React, { useEffect, useState } from 'react'
import AnimatedNavbar from '../../AnimatedNavbar';
import { Containerflex, Containerflexcomponent, Endcircle, Followernumber, Headercontainer, HeaderUnderNav, Herobutton, Herographicleft, Herographicright, Heroh1, Heroimageplaceholder, Heroimagewarpper, Herooverline, Heroparagraph, Line, Peoplegroupimage, Profileimageswrapper, Startcircle, Tagspan } from './styles'


function Header() {
    const [isShown, setIsShown] = useState(true);
    const [Duration, setDuration] = useState(300);
    
    const onChange = data => {
        setDuration(data)
    }
    
    return (
                <Headercontainer className="header">
                    <AnimatedNavbar duration={Duration} />
                        <Containerflex>
                            <Containerflexcomponent>
                                {
                                    //<Herooverline className={isShown ? 'load' : 'hide'} >What is the</Herooverline>
                                }
                                <Heroh1 className={ isShown ? 'load' : 'hide' }>TECLAB</Heroh1>
                                <Heroparagraph className={ isShown ? 'load' : 'hide' } >teclab is an place for students too meet and power their dreams</Heroparagraph>
                                <Herobutton href={"/projects"} className={isShown ? 'load' : 'hide'}>View Projects</Herobutton>
                                {
                                // <Startcircle width="28" height="28" stroke="#747982" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                                // <Endcircle width="28" height="28" stroke="#747982" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                                // <Endcircle className="plus40percent" width="28" height="28" stroke="#747982" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                                }
                            </Containerflexcomponent>
                        </Containerflex>
                        {/*<Heroimagewarpper className={ isShown ? 'load' : 'hide' }>
                            <Herographicleft src={brush}/>
                            <Herographicright src={brush2} />
                            <Heroimageplaceholder src={placeholder}/>
                            
                                <Profileimageswrapper>
                                    <Peoplegroupimage src={peopleblack} width={"147"}/>
                                    <Followernumber>
                                        {"Join our waiting list "}
                                        <Tagspan>5000+</Tagspan>
                                    </Followernumber>
                                </Profileimageswrapper>
                        </Heroimagewarpper>
                        */}
            </Headercontainer>
            

    )
}

export default Header
