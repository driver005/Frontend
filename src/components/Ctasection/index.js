import React, {useState} from 'react'
import { Container, Ctasection, Newsletterblock, Overline, Contentcta, Link, Formblock, Formwrapper, Newsletterfield, Sendbutton, Profileimageswarpper, Peoplegroupimage, Followernumber, Tagspan } from './styled'
import  Observer from 'react-intersection-observer'
import { Newsletter } from '../globalStyles';

const Cta = () => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = e => {
        if(e){
          setIsShown(true)
        }  
    };

    return (
        <Ctasection>
            <Container>
            <Observer
                onChange={handleChange}
                threshold={1}
            >
                <Newsletterblock className={ isShown ? 'load' : 'hide' }>
                    <Overline>{"CUSTOM SECTIONS"}</Overline>
                    <Contentcta>
                        {"Build better on webflow with "}
                        <Link href="http://flowbase.co" target="_blank">{"flowbase.co"}</Link>
                    </Contentcta>
                        <Newsletter />
                        <Profileimageswarpper>
                            <Peoplegroupimage src="https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098654258d0c39_people-purple.png" width="147" alt=""/>
                            <Followernumber>
                                {"Join our waiting list "}
                                <Tagspan>{"5000+"}</Tagspan>
                            </Followernumber>    
                        </Profileimageswarpper>
                    </Newsletterblock>
                </Observer>
            </Container>
        </Ctasection>
    )
}

export default Cta
