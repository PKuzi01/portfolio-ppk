import React from "react";;
import "./Portfolio.css"

function Portfolio() {
    return (
        <div className="portfolio">
            <h2>Wanna see my work?</h2>
                <div className="row">
                    <div className="col-6 folioSection">
                        <h3>Rock Paper Scissors Game</h3>
                        <p>Inspired by a lesson in the Foundations course on the Odin Project</p>
                        <a href="https://pkuzi01.github.io/rock-paper-scissors-ppk/" target="_blank">See project here</a> 
                    </div>
                    <div className="col-6 folioSection">
                        <h3>Weather App</h3>
                        <p>Completed as part of the SheCodes Plus workshop.</p>
                        <a href="https://sc-react-weather-app-ppk.netlify.app/" target="_blank">See project here</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 folioSection">
                        <h3>Practice Portfolio</h3>
                        <p>Completed as part of the SheCodes Responsive workshop.</p>
                        <a href="https://pkuzi01.github.io/sc-responsive-practice-portfolio-ppk/" target="_blank">See project here</a>
                    </div>
                    <div className="col-6 folioSection">
                        <h3>Music Fan Page</h3>
                        <p>Completed as part of the SheCodes Responsive Add-On workshop.</p>
                        <a href="https://the-okonma-project-ppk.netlify.app/" target="_blank">See project here</a> 
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;