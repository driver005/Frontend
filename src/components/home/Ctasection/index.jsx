import React, { useState } from 'react'
import { Container, Ctasection, Newsletterblock, Contentcta, Link } from './styled'
import { InView } from 'react-intersection-observer'
import Newsletter from '../Newsletter';
import { useTranslation } from 'react-i18next';

const Cta = () => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = e => {
        if (e) {
            setIsShown(true)
        }
    };

    const { t } = useTranslation();

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
                            {t(`home.newsletter.first`)}
                            <Link href="/" target="_blank">{"teclab"}</Link>
                            {t(`home.newsletter.last`)}
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
