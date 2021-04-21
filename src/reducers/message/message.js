import React, { createContext, useReducer, useContext } from 'react'


const messageReducer = (message = [], action) => {
  let messages, index
  switch (action.type) {
    case 'SET_MESSAGES':
      messages = message.data
      const list = Object.assign({ [messages?.[action.payload._id].length]: action.payload.messages }, { ...messages?.[action.payload._id] })
      messages  = { [action.payload._id]:  Object.keys(list).map((key) => (list[key])) }
      return { ...message, data: messages }
    case 'SET_USER_MESSAGES':
      messages = message
      messages = {...messages, [action.payload._id]: action.payload.messages}
      return { ...message, data: messages }
    case 'SET_REACTION':
      messages = message.data
      const indexMessage = messages[action.payload.Userid]?.findIndex((u) => u._id === action.payload.Messageid)
      if (indexMessage > -1) {
        const reaction = { ...messages[action.payload.Userid], [indexMessage]: action.payload.reaction }
        messages = { [action.payload.Userid]: Object.keys(reaction).map((key) => (reaction[key])) }
      }
      return { ...message, data: messages }
    
    default:
      return message;
  }
}


export default messageReducer


