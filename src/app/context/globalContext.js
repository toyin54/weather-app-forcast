'use Client'
import axios from "axios"
import React , { useState, createContext, useContext, useEffect } from "react"


const GlobalContext = createContext()
const GlobalContextUpdate = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({})

    const fetchForecast = async () => {
        try {
            const res = await axios.get('api/weather')
            console.log("res: ",res.data)
            setForecast(res.data)
        } catch (error) {
            console.log("Error , cannot load forecast")
            
        }
    }
    useEffect(() => {
        fetchForecast()
    } , [])
    forecast
    return (
        <GlobalContext.Provider value="hello">
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)

export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate)
