import { Container, Containerflex, Contenth2, Endcircle, H2span, Img, Programmsection, Startcircle, Starttext, Endtext, Circle, Text, Span, OText } from './styles'
import { Scene } from 'react-scrollmagic';
import { Link } from 'react-router-dom';
import learntocode from '../../common/images/learntocode.png'
import { useMediaQuery } from 'react-responsive';
function Programming() {
  const isNotMobile = useMediaQuery({
		query: '(min-width: 768px)',
  });
  
    return (
            <Programmsection>
                <Containerflex className="pa-5">
                        <Contenth2>
                            {"Programming "}
                            <H2span>{"101"}</H2span>
                        </Contenth2>
                </Containerflex>
                <Container>
                    <Scene duration={isNotMobile ? 1500 : 1300} pin={true} enabled={true}>
                        <Img loading="lazy" id="target" src={learntocode} />
                    </Scene>
                    <Startcircle width="28" height="28" stroke="var(--text-color)" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                    <Starttext>Start by joinning the teclab today</Starttext>
                    <Circle className="s-50" width="28" height="28" stroke="var(--text-color)" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                    <Text className="s-50">Learn programming fr<Span /><OText>o</OText>m scratch in python</Text>
                    <Endcircle width="28" height="28" stroke="var(--text-color)" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                    <Endtext>Learn from us!</Endtext>
                </Container>  
                <Containerflex>
                    <a className='btn' style={{maxWidth: '21rem'}} to='mailto:sfz.teclab@vdi.de'>Join Now</a>
                </Containerflex>        
            </Programmsection>
        
    )
}

export default Programming
