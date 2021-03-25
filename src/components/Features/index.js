import React from 'react'
import { Containerflex, Contenth2, Featuressection, H2span, Leftblur, Paragraph, Rightblur, Titlewrap } from './styles'
import Wrap from './Wrap'



const Features = () => {
    return (
        <Featuressection>
            <Leftblur 
                src="https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098632b28d0c36_Left%20Blur%402x.png" 
                width="424" 
                sizes="(max-width: 479px) 100vw, 424px" 
                srcset="
                    https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098632b28d0c36_Left%2520Blur%25402x-p-500.png 500w, 
                    https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098632b28d0c36_Left%2520Blur%25402x-p-800.png 800w, 
                    https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098632b28d0c36_Left%2520Blur%25402x-p-1080.png 1080w, 
                    https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098632b28d0c36_Left%20Blur%402x.png 1244w" 
                    alt="" 
            />
            <Containerflex>
                <Titlewrap>
                    <Contenth2>
                        {"Build products with "}
                        <H2span>{"impact"}</H2span>
                    </Contenth2>
                </Titlewrap>
                <Paragraph>
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus sed imperdiet sodales, dui diam accumsan lorem"}
                </Paragraph>
                <Wrap 
                    overline={"CUSTOM SECTIONS"} 
                    title_1={"Perfect base template"} 
                    title_2={"for creatives & startups"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus sed imperdiet sodales, dui diam accumsan lorem"}
                    image={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098636e68d0c25_dashboard-01.svg"}
                    ribbon={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098619d48d0c1a_brush-3.svg"}
                />
                <Wrap 
                    className={"reverse-wrap"}
                    overline={"CUSTOM SECTIONS"} 
                    title_1={"Perfect base template"} 
                    title_2={"for creatives & startups"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus sed imperdiet sodales, dui diam accumsan lorem"}
                    image={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098636e68d0c25_dashboard-01.svg"}
                    ribbon={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098619d48d0c1a_brush-3.svg"}
                />
                <Wrap 
                    overline={"CUSTOM SECTIONS"} 
                    title_1={"Perfect base template"} 
                    title_2={"for creatives & startups"}
                    paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum, tellus sed imperdiet sodales, dui diam accumsan lorem"}
                    image={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098636e68d0c25_dashboard-01.svg"}
                    ribbon={"https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d8098619d48d0c1a_brush-3.svg"}
                />
            </Containerflex>
            <Rightblur 
                src="https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d80986b7e78d0c31_Right%20Blur.png" 
                width="424" 
                sizes="(max-width: 479px) 100vw, 424px" 
                srcset="
                    https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d80986b7e78d0c31_Right%2520Blur-p-500.png 500w, 
                    https://uploads-ssl.webflow.com/601abee87e990a057b442690/601abee9d80986b7e78d0c31_Right%20Blur.png 591w"
                    alt=""
            />
        </Featuressection>
    )
}

export default Features
