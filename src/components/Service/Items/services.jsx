import React from 'react'
import {
    AiOutlinePrinter,
} from 'react-icons/ai'
import {
    BiVideo,
    BiHomeAlt,
} from 'react-icons/bi'
import {
    FaBlog
} from 'react-icons/fa'
import moodle from '../../../images/moodle.svg'
export const ServiceItemsBooks = [
    {
        title: "3d printers",
        paragrap: "With 15 super cool 3d printer to visulaise your idea",
        icon: <AiOutlinePrinter size="22" color={'white'} />,
    },
    {
        title: "Jitsi",
        paragrap: "Join our Jitsi server over the Dashboard",
        icon: <BiVideo size="22" color={'white'} />,
    },
    {
        title: "Moodle",
        paragrap: "Moodle server is under construction",
        imgUrl: moodle,
    },
    {
        title: "Posts",
        paragrap: "Blog your story and tell our friends about what you did or crazy events",
        icon: <FaBlog size="22" color={'white'} />,
    },
    // {
    //     title_1: "Click here",
    //     title_2: "to start exploring",
    //     buttonText: "Get started",
    //     buttonUrl: "/dash",
    //     tag10: "In early beta",
    //     titleclassName: "service-title-centre"
    // }
];