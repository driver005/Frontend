import React from 'react'
import { Sendbutton } from './styles';



export default function Newsletter(props) {
    return (
        <a href="https://news.sfz-tuebingen.org/lists/?p=subscribe" target="_blank">
            <Sendbutton
                primary={props.primary}
            >Register to our newsletter</Sendbutton>
        </a>
    )
}