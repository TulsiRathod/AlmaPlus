import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
    const nav=useNavigate();
    window.scrollTo(0, 0)
  return (
    <>
       <nav class="banner-nav">
        <input type="checkbox" id="check"/>
        <label for="check" class="check-btn"><i class="fa-solid fa-bars"></i></label>
        <ul>
            <li onClick={()=>{nav('/login')}}>Login</li>
            <li onClick={()=>{nav('/register')}}>Register</li>
        </ul>
    </nav>

    <div class="banner-main">
        <div class="banner-left">
            <img src="images/Logo.jpg" alt="logo" id="logo" width='40px'/>
            <h1>ALMAPLUS</h1>
            <p>A Platform for Alumni and Student to Connect together.</p>
            <div class="banner-btn">
                Register Institute
            </div>
        </div>
        <div class="banner-right">
            <img src="images/connect.png" alt="connect-image" id="main-img" width="100%" height="100%"/>
        </div>
    </div>

    <div class="main-section">
        <div class="div5">
            <div class="div5-left">
                <h1>Find the right job or internship for you</h1>
            </div>
            <div class="div5-right">
                <button id="btn-job">Network Administrator</button>
                <button id="btn-job">Designer</button>
                <button id="btn-job">System Analyst</button>
                <button id="btn-job">Database Administrator</button>
                <button id="btn-job">Full-stack Developer</button>
                <button id="btn-job">Software Engineer</button>
                <button id="btn-job">Data Scientist</button>
                <button id="btn-job">Cloud Engineer</button>
                <button id="btn-job">IT Security Specialist</button>
                <button id="btn-job">Analytics Manager</button>
            </div>
        </div>   
        <div class="div4">
            <div class="div4-card">
                <h3>EVENTS</h3>
                <img src="images/event.png" alt="events"/>
                <p>Events taking place at AlmaPlus. Spin up weekend reunions or casual hangouts.</p>
            </div>
            <div class="div4-card">
                <h3>ALUMINI DIRECTORY</h3>
                <img src="images/alumini-directory.png" alt="events"/>
                <p>Help alumini discover classmates they have lost touch with, or find mentors who can help with the career change they are lokking to make.</p>
            </div>
            <div class="div4-card">
                <h3>CONTENT LIBRARY</h3>
                <img src="images/content-library.png" alt="events"/>
                <p>Secure, on-demand libraries for your institute. Create class notes, job hiring by the list of alumni owned businesses.</p>
            </div>
        </div>
        <div class="div3">
            <h1>Why AlmaPlus ?</h1>
                <div>
                <i class="fa-solid fa-pen"></i>
                    In the value-focused reality that our alumni live in, provide them a reason to give back their time,
                    talent, & money by choosing right technology and strategy.
                </div>
                <div>
                <i class="fa-solid fa-pen"></i>
                    Build alumni-centric programs So we build everything with them in mind.
                </div>
                <div>
                <i class="fa-solid fa-pen"></i>
                    Programs work better on Almabase because you can reach your alumni wherever they are.
                </div>
                <div>
                <i class="fa-solid fa-pen"></i>
                    No app downloads or additional sign ups necessary.
                </div>
                <div>
                <i class="fa-solid fa-pen"></i>
                    It’s incredibly easy for any age group to participate from anywhere.
                </div>
        </div>     
        <div class="div2">
            <div class="div2-img">
                <img src="images/Alumni-2.svg" alt="alumni"/>
            </div>
            <div class="div2-text">
                <h1>We believe your Alumni should be at the Center</h1><br/>
                <p>In the value-focused reality that our alumni live in, provide them a reason to give back their time,
                    talent, & money by choosing the right technology and strategy.</p>
            </div>
        </div>
       
    </div>
    <div class="footer">
        <div class="footer-main">
            <div class="f-about">
                <h2>About AlmaPlus</h2>
                <p>AlmaPlus is a web application that allows college management to store the details of both current and former students of the college. It also enables communication between them, with new students being able to seek information on job vacancies, career advice, and subject details from alumni.</p>
            </div>
            <div class="f-links">
                <h3>Links</h3>
                <ul>
                    <li>
                        Home
                    </li><br/>
                    <li>
                        About
                    </li><br/>
                    <li>
                        Services
                    </li><br/>
                    <li>
                        Portfolio
                    </li><br/>
                    <li>
                        Contact
                    </li><br/>
                </ul>
            </div>
            <div class="f-services">
                <h3>Services</h3>
                <ul>
                    <li>
                        Alumini
                    </li><br/>
                    <li>
                        JOBS
                    </li><br/>
                    <li>
                        Internships
                    </li><br/>
                    <li>
                        Institute
                    </li><br/>
                    <li>
                        Knowledge
                    </li>
                </ul>
            </div>
            <div class="address">
                <h3>Address</h3>
                <ul>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        ALMAPLUS
                    </li><br/>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        +91 9876543210
                    </li><br/>
                    <li>
                        <i class="fa-regular fa-envelope"></i>
                        AlmaPlus1111@gmail.com
                    </li>
                </ul>
            </div>
            <div class="Social-media">
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <i class="fa-brands fa-instagram"></i>
                        AlmaPlus
                    </li><br/>
                    <li>
                        <i class="fa-brands fa-linkedin"></i>
                        AlmaPlus
                    </li><br/>
                    <li>
                        <i class="fa-brands fa-github"></i>
                        AlmaPlus
                    </li><br/>
                </ul>
            </div>
        </div>
        <hr/>
        <div class="last">
            <p><i class="fa-regular fa-copyright"></i>
                Copyright AlmaPlus since 2023
            </p>
        </div>
    </div>
    </>
  )
}

export default Main
