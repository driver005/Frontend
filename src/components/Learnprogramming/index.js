import React from 'react'
import { Container, Containerflex, Contenth2, Endcircle, H2span, Img, Programmsection, Startcircle, Titlewrap, Starttext, Endtext, Circle, Text } from './styles'
import { Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import learntocode from '../../images/learntocode.png'
function Programming() {
    return (
            <Programmsection>
                <Containerflex className="pa-5">
                        <Contenth2>
                            {"Programming "}
                            <H2span>{"101"}</H2span>
                        </Contenth2>
                </Containerflex>
                <Container>
                    <Scene duration={900} pin={true} enabled={true}>
                        <Img id="target" src={learntocode} />
                    </Scene>
                    <Startcircle width="28" height="28" stroke="#747982" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                    <Starttext>Start by joinning the teclab today</Starttext>
                    <Circle className="s-50" width="28" height="28" stroke="#747982" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                    <Text className="s-50">Learn programming from scratch in python</Text>
                    <Endcircle width="28" height="28" stroke="#747982" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                    <Endtext>Learn with the best</Endtext>
                </Container>  
                <Containerflex>
                    <Button as={Link} style={{maxWidth: '21rem'}} to="/dash" variant="outline-info" size="lg" block>Join Now</Button>
                </Containerflex>        
            </Programmsection>
        
    )
}

export default Programming
