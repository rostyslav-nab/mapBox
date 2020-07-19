import React from "react"
import classes from './Home.scss'
import {MapBox} from "../mapBox/mapBox"

export const HomePage = () =>{
    return(
        <div className={classes.homePage}>
            <MapBox/>
        </div>
    )
}