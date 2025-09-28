import React from 'react'
import {
    AiOutlinePrinter,
} from 'react-icons/ai'
import {
    BiVideo,
    BiHomeAlt,
} from 'react-icons/bi'
import { BsHeadsetVr } from "react-icons/bs";
import {
    FaBlog
} from 'react-icons/fa'
import { SiNextcloud } from "react-icons/si";
import moodle from '../../../common/images/moodle.svg'
export const ServiceItemsBooks = [
    {
        key: "0",
        icon: <AiOutlinePrinter size="22" color={'white'} />,
    },
    {
        key: "1",
        icon: <BsHeadsetVr size="22" color={'white'} />,
    },
    {
        key: "2",
        imgUrl: moodle,
    },
    {
        key: "3",
        icon: <FaBlog size="22" color={'white'} />,
    },
    {
        key: "4",
        icon: <SiNextcloud size="22" color={'white'} />,
    }
    // {
    //     title_1: "Click here",
    //     title_2: "to start exploring",
    //     buttonText: "Get started",
    //     buttonUrl: "/dash",
    //     tag10: "In early beta",
    //     titleclassName: "service-title-centre"
    // }
];