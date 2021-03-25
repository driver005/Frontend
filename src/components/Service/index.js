import React, {useState} from 'react'
import { Containerflex, Contenth2, H2span, Iconblock, Iconblockimg, Servicegrid, Servicegridblock, Servicegridblock02, Servicegridblock03, Servicegridblock04, Serviceparagraph, Servicesection, Servicetitle, Titlewrap, Endblock, Primarybutton, Tag10, Divider } from './styles'
import { ServiceItemsBooks } from './Items/services'
import  Observer from 'react-intersection-observer'

const Service = () => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = e => {
        if(e){
          setIsShown(true)
        }  
    };
    return (
        <Servicesection>
            <Containerflex>
                <Titlewrap>
                    <Contenth2>
                        {"Services that "}
                        <H2span>{"drive success"}</H2span>
                    </Contenth2>
                </Titlewrap>
                <Observer
                    onChange={handleChange}
                    threshold={1}
                >
                    <Servicegrid>
                        {ServiceItemsBooks.map((item, index) => {
                            if(item.buttonText) {
                                return (
                                    <Endblock key={index} className={ isShown ? 'load' : 'hide' }>
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
                                    <Servicegridblock key={index} className={ isShown ? 'load' : 'hide' } >
                                        <Iconblock>
                                            <Iconblockimg src={item.imgUrl}/>
                                        </Iconblock>
                                        <Servicetitle>{item.title}</Servicetitle>
                                        <Serviceparagraph>{item.paragrap}</Serviceparagraph>
                                    </Servicegridblock>  
                                )
                            }
                        })}
                    </Servicegrid>
                </Observer>
            </Containerflex>
            <Divider />
        </Servicesection>
    )
}

export default Service
