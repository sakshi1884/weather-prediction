import Navbar from "../components/Navbar";
import "./css/About.css"
export default function About(){
    return(
        <>
        <Navbar/>
        <div className="about-content">
            <h4>ABOUT</h4>
            <div className="info">
                <p>🌦️ Atmos will fetch real-time weather information for cities around the world. </p>
            </div>
            <div className="info">
                <p>🔍 Search any city and instantly view current weather conditions</p>
            </div>
            <div className="info">
                <p>🌡️ Check temperature, feels-like temperature, humidity, and wind speed.</p>
            </div>
            <div className="info">
                <p>📅 View a 5-day weather forecast with detailed daily updates.</p>
            </div>
            <div className="info">
                <p>💻 Built with React, Vite, React Router, and Material UI for a fast and responsive experience.</p>
            </div>
            <div className="info">
                <p>🙋‍♀️ Built with ❤️ by Sakshii.</p>
            </div>

        </div>
        </>
    )
}