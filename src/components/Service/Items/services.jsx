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
import moodle from '../../../images/moodle.svg'
export const ServiceItemsBooks = [
    {
        title: "3d printers",
        paragrap: "With 15 super cool 3d printer to visulaise your idea",
        icon: <AiOutlinePrinter size="22" color={'white'} />,
    },
    {
        title: "VR",
        paragrap: "Meet us on Friday and trie one of our 5 Meta Quest VR Headsets",
        icon: <BsHeadsetVr size="22" color={'white'} />,
    },
    {
        title: "Moodle",
        paragrap: "Moodle server is under construction",
        imgUrl: moodle,
    },
    {
        title: "Blog",
        paragrap: "Our Blog is comming. Join use and help create a immersive experience",
        icon: <FaBlog size="22" color={'white'} />,
  },
  {
        title: "Nextcloud",
        paragrap: "You want to be apart of our Nextcloud. Just contact us",
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