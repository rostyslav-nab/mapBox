import React from 'react'
import classes from './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Nav} from "./components/Nav/Nav"
import {HomePage} from "./HomePage/Home"
import {InfoPage} from "./InfoPage/InfoPage"
import {ContactsPage} from "./ContactsPage/ContactsPage"

export const App = () =>{
    return(
        <Router>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Nav/>
                </div>
                <div className={classes.mainContent}>
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/info'} component={InfoPage}/>
                    <Route path={'/contacts'} component={ContactsPage}/>
                </div>
            </div>
        </Router>
    )
}
