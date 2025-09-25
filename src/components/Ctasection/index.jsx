import React, { useState } from 'react'
import { Container, Ctasection, Newsletterblock, Contentcta, Link } from './styled'
import { InView } from 'react-intersection-observer'
import Newsletter from '../Newsletter';

const Cta = () => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = e => {
        if (e) {
            setIsShown(true)
        }
    };

    return (
        <Ctasection>
            <Container>
                <InView
                    onChange={handleChange}
                    threshold={1}
                >
                    <Newsletterblock className={isShown ? 'load' : 'hide'}>
                        {/*<Overline>{"Newsletter"}</Overline>*/}
                        <Contentcta>
                            {"Join our newsletter to receive the latest "}
                            <Link href="/" target="_blank">{"teclab"}</Link>
                            {" news "}
                        </Contentcta>
                        <Newsletter />
                        {
                            // <Profileimageswarpper>
                            //     <Peoplegroupimage src={peoplepurple} width="147" alt=""/>
                            //     <Followernumber>
                            //         {"Join our waiting list "}
                            //         <Tagspan>{"5000+"}</Tagspan>
                            //     </Followernumber>    
                            // </Profileimageswarpper>
                        }
                    </Newsletterblock>
                </InView>
            </Container>
        </Ctasection>
    )
}

export default Cta
