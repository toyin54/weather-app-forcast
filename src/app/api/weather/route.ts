import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import 'dotenv/config'
export async function GET(req : NextRequest) {
    // const dotenv = require('dotenv');
    try {
        const apiKey = process.env.WEATHER_KEY
        const place = 'London'
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${apiKey}`
        const res = await axios.get(url);
        return NextResponse.json(res.data)
    } catch (error) {
        console.log("Error getting Data")
    }
    
}