import { BsChatSquare, FcTodoList, FaRegListAlt, BiVideo, BsCalendar, BiNotification, BiHomeAlt, FiFileText, FaTable, FaBlog, CgWebsite } from 'react-icons/all'

export const MenuItemsBooks = [
    {
        Card: {
                Cardelement1: {
                    name: "Dashboard",
                    detail: "Click and learn",
                    icon: <BiHomeAlt size="18" />,
                    href: "/dash/app/main/dashboard"
                },
                Cardelement2:{
                    name: "Todolist",
                    detail: "Click and learn",
                    icon: <FcTodoList size="18" />,
                    href: "/dash/app/todolist"
                },
        }
    },
    {
        Card: {
                Cardelement1: {
                    name: "Calender",
                    detail: "Click and learn",
                    icon: <BsCalendar size="18" />,
                    href: "/dash/app/calendar"
                },
                Cardelement2:{
                    name: "Chat",
                    detail: "Click and learn",
                    icon: <BsChatSquare size="18" />,
                    href: "/dash/app/chat"
                },
        }
    },
    {
        Card: {
                Cardelement1: {
                    name: "Jitsi",
                    detail: "Click and learn",
                    icon: <BiVideo size="18" />,
                    href: "/dash/app/jitsi"
                },
                Cardelement2:{
                    name: "Post",
                    detail: "Click and learn",
                    icon: <FaBlog size="18" />,
                    href: "/dash/app/posts"
                },
        }
    },
    {
        Card: {
                Cardelement1: {
                    name: "Quiz",
                    detail: "Click and learn",
                    icon: <FaRegListAlt size="18" />,
                    href: "/dash/app/quiz"
                },
                
        }
    },
    
];