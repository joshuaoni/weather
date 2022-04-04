import { useState } from "react";
import axios from 'axios';
import getCurrentDayDetailedForecast from '../../helpers/getCurrentDayDetailedForecast';
import getCurrentDayForecast from '../../helpers/getCurrentDayForecast';
import getUpcomingDaysForecast from '../../helpers/getUpcomingDaysForecast';

const API = 'https://www.metaweather.com/api/location'; 
const CORS = 'https://the-ultimate-api-challenge-v2.herokuapp.com';
const URL = `${CORS}/${API}`;

const useCustom = () => {
    const [error, setError] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [forecast, setForecast] = useState(null)

    const getLocationId = async location => {
        const {data} = await axios(`${URL}/search`, {params: {query: location}})

        if (!data || data.length === 0) {
            setError('This location is not in our database, try another')
            setIsPending(false)
            return;
        }
        return data;
    }

    const getWeather = async data => {
        if (!data || data.length === 0) return;
        const weatherData = await axios(`${URL}/${data[0].woeid}`)
        
        if (!weatherData || weatherData.length === 0) {
            setError('Something went wrong')
            setIsPending(false)
            return;
        }
        return weatherData;
    }

    const getForecastInfo = (data) => {
        const todayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0])
        const today = getCurrentDayForecast(data.consolidated_weather[0], data.title)
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather)
        
        setForecast({today, todayDetails, upcomingDays})
        setIsPending(false)
    }

    const submitLocation = async location => {
        setIsPending(true)
        setError(false)
        
        const data = await getLocationId(location.trim())
        const weatherData = await getWeather(data)

        if (!weatherData || weatherData.length === 0) return;
        
        getForecastInfo(weatherData.data)
    }

    const removeError = () => {
        setError(false)
    }

    return {error, isPending, forecast, submitLocation, removeError}
}

export default useCustom;