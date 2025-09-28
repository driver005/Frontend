import React, { useState } from 'react'
import { Containerflex, Contenth2, H2span, Iconblock, Iconblockimg, Servicegrid, Servicegridblock, Serviceparagraph, Servicesection, Servicetitle, Endblock, Primarybutton, Tag10, Divider } from './styles'
import { ServiceItemsBooks } from './Items/services'
import { InView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

const Service = () => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = e => {
        if (e) {
            setIsShown(true)
        }
    };

    const { t } = useTranslation();

    return (
        <Servicesection>
            <Containerflex>
                <Contenth2>
                    {t(`projects.services.title`)} <H2span>{t(`projects.services.highlight`)}</H2span>
                </Contenth2>
                <InView
                    onChange={handleChange}
                    threshold={1}
                >
                    <Servicegrid>
                        {ServiceItemsBooks.map((item, index) => {
                            if (item.buttonText) {
                                return (
                                    <Endblock key={index} className={isShown ? 'load' : 'hide'}>
                                        <Servicetitle className={item.titleclassName}>
                                            {item.title_1}
                                            <br />
                                            {item.title_2}
                                        </Servicetitle>
                                        <Primarybutton href={item.buttonUrl}>{item.buttonText}</Primarybutton>
                                        <Tag10>{item.tag10}</Tag10>
                                    </Endblock>
                                )
                            } else {
                                return (
                                    <Servicegridblock key={index} className={isShown ? 'load' : 'hide'} >
                                        <Iconblock>
                                            {item.imgUrl && <Iconblockimg alt={item.imgAlt} title={item.imgTitle} loading="lazy" src={item.imgUrl} />}
                                            {item.icon && <React.Fragment>{item.icon}</React.Fragment>}
                                        </Iconblock>
                                        <Servicetitle>{t(`projects.services.items.${item.key}.title`)}</Servicetitle>
                                        <Serviceparagraph>{t(`projects.services.items.${item.key}.description`)}</Serviceparagraph>
                                    </Servicegridblock>
                                )
                            }
                        })}
                    </Servicegrid>
                </InView>
            </Containerflex>
            <Divider id="trigger" />
        </Servicesection>
    )
}

export default Service
