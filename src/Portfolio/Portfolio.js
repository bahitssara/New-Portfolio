import React from 'react';
import './Portfolio.css'
import QuizAppPic from './QuizAppPic.png'
import BigMusicGuy from './BigMusicGuy.png'
import SipandRate from './SipandRate.png'
import JustGo from './JustGo.png'



class Portfolio extends React.Component {
    render() {
        return (
            <div className='portfolio'>
                    <section className='projects'>
                        <h2>Projects</h2>
                        <h3>The 1975 Quiz App</h3>
                        <a href='https://bahitssara.github.io/QUIZAPP/'><img className='project-photo' src={QuizAppPic} alt='project' /></a>
                            <ul className='project-links'>
                                <li>
                                    <button><a href='https://github.com/bahitssara/QUIZAPP' target='_blank' rel='noopener noreferrer'>Repository</a></button></li>
                                <li>
                                    <button><a href='https://bahitssara.github.io/QUIZAPP/' target='_blank' rel='noopener noreferrer'>Live Page</a></button></li>
                            </ul>
                            <p className='description'>Quiz app to test knowledge of the all time best band around, The 1975. Uses basic HTML, CSS, JavaScript and jQuery to create a short interactive web app. </p>
                    </section>

                    <section className='projects'>
                        <h3>Big Music Guy-API HACK</h3>
                        <a href='https://github.com/bahitssara/Big-Music-Guy'><img className='project-photo' src={BigMusicGuy} alt='project' /></a>
                            <ul className='project-links'>
                                <li>
                                    <button><a href='https://github.com/bahitssara/Big-Music-Guy' target='_blank' rel='noopener noreferrer'>Repository</a></button></li>
                                <li>
                                    <button><a href='https://bahitssara.github.io/Big-Music-Guy/' target='_blank' rel='noopener noreferrer'>Live Page</a></button></li>
                            </ul>
                            <p className='description'>Web app for music lovers. Allows users to search a musician or band and recieve Youtube video interviews, recent news articles, and recommendations for similar artists. APIs used are Youtube API, News API, and TasteDive API. Technologies used to make up the app are HTML, CSS, JavaScript, and jQuery.</p>
                    </section>

                    <section className='projects'>
                        <h3>Sip & Rate</h3>
                        <a href='https://github.com/bahitssara/Sip-and-Rate'><img className='project-photo' src={SipandRate} alt='project' /></a>
                            <ul className='project-links'>
                                <li>
                                    <button><a href='https://github.com/bahitssara/Sip-and-Rate' target='_blank' rel='noopener noreferrer'>Repository</a></button></li>
                                <li>
                                    <button><a href='https://sip-and-rate.saraamayberry.now.sh/' target='_blank' rel='noopener noreferrer'>Live Page</a></button></li>
                            </ul>
                            <p className='description'>Sip and Rate allows beer and wine lovers to search and rate some of their favorite or least favorite beverages. Can't remember how you felt about a certain drink? Problem solved! This full stack app is built with JS, Node.js, PostgreSQL, HTML, and CSS.
                            </p>
                    </section>

                    <section className='projects'>
                        <h3>Just Go</h3>
                        <a href='https://github.com/bahitssara/Just-Go'><img className='project-photo' src={JustGo} alt='project' /></a>
                            <ul className='project-links'>
                                <li>
                                    <button><a href='https://github.com/bahitssara/Just-Go' target='_blank' rel='noopener noreferrer'>Repository</a></button></li>
                                <li>
                                    <button><a href='https://just-go-app.now.sh/' target='_blank' rel='noopener noreferrer'>Live Page</a></button></li>
                            </ul>
                            <p className='description'>Just Go is an app that allows you to search events by name, location or type and then save them to your profile to potentially purchase later. It uses SeatGeek API to facilitate the search feature and links you to their site to purchase tickets! This full stack app is built with JS, Node.js, PostgreSQL, HTML, and CSS.

                            </p>
                    </section>
            </div>
        )
    }
}

export default Portfolio;

            
            
