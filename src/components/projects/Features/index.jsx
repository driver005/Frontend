import React from 'react';
import {
    Containerflex,
    Contenth2,
    Featuressection,
    H2span,
    Leftblur,
    Paragraph,
    Rightblur,
    Titlewrap,
} from './styles';
import Wrap from './Wrap';

import Leftblurnormal from '../../common/images/features/left_blur.png';
import Leftblur500 from '../../common/images/features/left_blur500.png';
import Leftblur800 from '../../common/images/features/left_blur800.png';
import Leftblur1080 from '../../common/images/features/left_blur1080.png';
import Leftblur1244 from '../../common/images/features/left_blur1244.png';

import ai from '../../common/images/ai.jpg';
import wro from '../../common/images/wro.jpg';

import Rightblurnormal from '../../common/images/features/right_blur.png';
import Rightblur500 from '../../common/images/features/right_blur500.png';
import Rightblur591 from '../../common/images/features/right_blur591.png';
import Vexsvg from './Svganimation';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    return (
        <Featuressection>
            <Leftblur
                src={Leftblurnormal}
                loading="lazy"
                width='424'
                sizes='(max-width: 479px) 100vw, 424px'
                srcSet={`
                    ${Leftblur500} 500w, 
                    ${Leftblur800} 800w, 
                    ${Leftblur1080} 1080w, 
                    ${Leftblur1244} 1244w`}
                alt=''
            />
            <Containerflex>
                <Titlewrap>
                    <Contenth2>
                        {t(`projects.features.title`)} <H2span>{t(`projects.features.subtitle`)}</H2span>
                    </Contenth2>
                </Titlewrap>

                <Paragraph>{t(`projects.features.description`)}</Paragraph>

                < Wrap
                    overline={t(`projects.features.wraps.wro.overline`)}
                    title_1={t(`projects.features.wraps.wro.title_1`)}
                    title_2={t(`projects.features.wraps.wro.title_2`)}
                    paragraph={t(`projects.features.wraps.wro.paragraph`)}
                    image={wro}
                    classNameImage="border-2 width-85"
                />

                <Wrap
                    className="reverse-wrap"
                    overline={t(`projects.features.wraps.ai.overline`)}
                    title_1={t(`projects.features.wraps.ai.title_1`)}
                    title_2={t(`projects.features.wraps.ai.title_2`)}
                    paragraph={t(`projects.features.wraps.ai.paragraph`)}
                    image={ai}
                    classNameImage="border-2 width-70"
                />

                <Wrap
                    overline={t(`projects.features.wraps.vex.overline`)}
                    title_1={t(`projects.features.wraps.vex.title_1`)}
                    title_2={t(`projects.features.wraps.vex.title_2`)}
                    paragraph={t(`projects.features.wraps.vex.paragraph`)}
                    svgAnimation={true}
                    svg={<Vexsvg loading="lazy" />}
                />
            </Containerflex>
            <Rightblur
                src={Rightblurnormal}
                loading="lazy"
                width='424'
                sizes='(max-width: 479px) 100vw, 424px'
                srcSet={`
                    ${Rightblur500} 500w, 
                    ${Rightblur591} 591w`}
                alt=''
            />
        </Featuressection>
    );
};

export default Features;
