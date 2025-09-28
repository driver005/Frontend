import React from 'react'
import { Sendbutton } from './styles';
import { useTranslation } from 'react-i18next';



export default function Newsletter(props) {
    const { t } = useTranslation();

    return (
        <a href="https://news.sfz-tuebingen.org/lists/?p=subscribe" target="_blank">
            <Sendbutton
                primary={props.primary}
            >{t(`home.newsletter.register`)}</Sendbutton>
        </a>
    )
}