import React, {useState} from 'react'
import {Contentblock, Contenth2, Featurecolumncontent, Featurecolumnimage, Featureimage, Featureimagediv,Featurewrap, Overline, Paragraphleftalign, Ribbon,} from './styles'
import  Observer from 'react-intersection-observer'

const Wrap = (props) => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = e => {
        if(e){
            setIsShown(true)
        }  
    };

    return (
        <Observer
                onChange={handleChange}
                threshold={1}
            >
            <Featurewrap className={props.className || ""}>
                <Featurecolumncontent className={ isShown ? 'load' : 'hide' }>
                    <Contentblock>
                        <Overline>{props.overline}</Overline>
                    </Contentblock>
                    <Contenth2>
                        {props.title_1}
                        <br />
                        {props.title_2}
                    </Contenth2>
                    <Paragraphleftalign>{props.paragraph}</Paragraphleftalign>
                </Featurecolumncontent>
                <Featurecolumnimage className={ isShown ? 'load' : 'hide' }>
                    <Featureimagediv>
                        {props.svgAnimation ? (props.svg) : (<Featureimage src={props.image} className={props.classNameImage} />)}
                        {props.ribbon && <Ribbon src={props.ribbon}/>}
                    </Featureimagediv>
                </Featurecolumnimage>
            </Featurewrap>
        </Observer>
    )
}

export default Wrap
