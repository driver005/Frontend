import React from 'react'
import {
    AiOutlinePrinter,
} from 'react-icons/ai'
import {
    BsChatSquare,
} from 'react-icons/bs'
import {
    FcTodoList,
} from 'react-icons/fc'
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
        title: "Dashboard",
        paragrap: "In early construction",
        icon: <BiHomeAlt size="22" color={'white'} />,
    },
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
        title: "Chat",
        paragrap: "Chat with your friends and make great plans",
        icon: <BsChatSquare size="22" color={'white'} />,
    },
    {
        title: "Todolist",
        paragrap: "Plan your day and by more organized",
        icon: <FcTodoList size="22" color={'white'} />,
    },
    {
        title: "Posts",
        paragrap: "Blog your story and tell our friends about what you did or crazy events",
        icon: <FaBlog size="22" color={'white'} />,
    },
    {
        title_1: "Click here",
        title_2: "to start exploring",
        buttonText: "Get started",
        buttonUrl: "/dash",
        tag10: "In early beta",
        titleclassName: "service-title-centre"
    }



];