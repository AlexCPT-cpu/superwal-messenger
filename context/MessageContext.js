import { createContext, useContext } from "react";
import { useState } from "react";

export const MessageContext = createContext()


export const MessageContextProvider = ({ children }) => {

    const [message, setMsg] = useState([{}])

    const setMessage = (msg) => {
      let currentMsg = {
            message: msg,
            timeStamp: Date.now()
        }
        setMsg((prevMessages) => [...prevMessages, currentMsg])
    }

    return (
        <MessageContext.Provider
        value={{
            setMessage,
            message
        }}
        >
            {children}
        </MessageContext.Provider>
    )
}