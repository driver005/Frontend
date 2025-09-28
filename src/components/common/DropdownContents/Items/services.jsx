import React from 'react'
import {
  BsChatSquare,
  BsCalendar,
} from 'react-icons/bs'
import {
  BiVideo,
  BiHomeAlt,
} from 'react-icons/bi'
import {
  FaRegListAlt,
  FaBlog
} from 'react-icons/fa'
import {
  FcTodoList,
} from 'react-icons/fc'

export const MenuItemsBooks = [
  {
    Card: {
      Cardelement1: {
        key: 'dashboard',
        icon: <BiHomeAlt size="18" />,
        href: "/dash/app/main/dashboard"
      },
      Cardelement2: {
        key: "todolist",
        icon: <FcTodoList size="18" />,
        href: "/dash/app/todolist"
      },
    }
  },
  {
    Card: {
      Cardelement1: {
        key: "calender",
        icon: <BsCalendar size="18" />,
        href: "/dash/app/calendar"
      },
      Cardelement2: {
        key: "chat",
        icon: <BsChatSquare size="18" />,
        href: "/dash/app/chat"
      },
    }
  },
  {
    Card: {
      Cardelement1: {
        key: "jitsi",
        icon: <BiVideo size="18" />,
        href: "/dash/app/jitsi"
      },
      Cardelement2: {
        key: "post",
        icon: <FaBlog size="18" />,
        href: "/dash/app/posts"
      },
    }
  },
  {
    Card: {
      Cardelement1: {
        key: "quiz",
        icon: <FaRegListAlt size="18" />,
        href: "/dash/app/quiz"
      },

    }
  },

];