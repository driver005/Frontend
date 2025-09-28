import { Container, Containerflex, Contenth2, Endcircle, H2span, Img, Programmsection, Startcircle, Starttext, Endtext, Circle, Text, Span, OText } from './styles'
import { Scene } from 'react-scrollmagic';
import { Link } from 'react-router-dom';
import learntocode from '../../common/images/learntocode.png'
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

function Programming() {
    const isNotMobile = useMediaQuery({
        query: '(min-width: 768px)',
    });

    const { t } = useTranslation();

    return (
        <Programmsection>
            <Containerflex className="pa-5">
                <Contenth2>
                    {t(`projects.programming.title`)} <H2span>{t(`projects.programming.highlight`)}</H2span>
                </Contenth2>
            </Containerflex>

            <Container>
                <Scene duration={isNotMobile ? 1500 : 1300} pin={true} enabled={true}>
                    <Img loading="lazy" id="target" src={learntocode} />
                </Scene>

                <Startcircle width="28" height="28" stroke="var(--text-color)" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                <Starttext>{t(`projects.programming.start`)}</Starttext>

                <Circle className="s-50" width="28" height="28" stroke="var(--text-color)" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                <Text className="s-50">
                    {t(`projects.programming.step1`)}
                    <Span />
                    <OText>o</OText>
                    {t(`projects.programming.step2`)}
                </Text>

                <Endcircle width="28" height="28" stroke="var(--text-color)" strokeWidth="3" cx="14" cy="10" r="5" fillRule="nonzero" />
                <Endtext>{t(`projects.programming.end`)}</Endtext>
            </Container>

            <Containerflex>
                <a
                    className="btn"
                    style={{ maxWidth: '21rem' }}
                    href="mailto:sfz.teclab@vdi.de"
                >
                    {t(`projects.programming.button`)}
                </a>
            </Containerflex>
        </Programmsection>
    );
}

export default Programming
