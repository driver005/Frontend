import React, { useState } from 'react'
import { Container, Ctasection, Newsletterblock, Contentcta, Link, Sendbutton } from './styled'
import { InView } from 'react-intersection-observer'
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
                        <a href="https://news.sfz-tuebingen.org/lists/?p=subscribe" target="_blank">
                            <Sendbutton
                                primary={false}
                            >{t(`home.newsletter.register`)}</Sendbutton>
                        </a>
                    </Newsletterblock>
                </InView>
            </Container>
        </Ctasection>
    )
}

export default Cta
