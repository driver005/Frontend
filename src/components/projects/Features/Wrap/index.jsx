import React, { useState } from 'react';
import {
    Contentblock,
    Contenth2,
    Featurecolumncontent,
    Featurecolumnimage,
    Featureimage,
    Featureimagediv,
    Featurewrap,
    Overline,
    Paragraphleftalign,
    Ribbon,
} from './styles';
import { InView } from 'react-intersection-observer';

const Wrap = (props) => {
    const [isShown, setIsShown] = useState(false);

    const handleChange = (e) => {
        if (e) {
            setIsShown(true);
        }
    };

    return (
        <InView onChange={handleChange} threshold={1}>
            <Featurewrap className={props.className || ''}>
                <Featurecolumncontent className={isShown ? 'load' : 'hide'}>
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
                <Featurecolumnimage className={isShown ? 'load' : 'hide'}>
                    <Featureimagediv>
                        {props.svgAnimation ? (
                            props.svg
                        ) : (
                            <Featureimage
                                loading="lazy"
                                src={props.image}
                                className={props.classNameImage}
                                alt={props.imageAlt}
                                title={props.imageTitle}
                            />
                        )}
                        {props.ribbon && <Ribbon loading="lazy" src={props.ribbon} />}
                    </Featureimagediv>
                </Featurecolumnimage>
            </Featurewrap>
        </InView>
    );
};

export default Wrap;
