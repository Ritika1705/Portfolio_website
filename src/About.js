import '../src/App.css';
import Accordion from 'react-bootstrap/Accordion';

function About()
{
    return(
        <>
            <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
                <title>Bootstrap Example</title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <link rel="stylesheet" href="App.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap&effect=fire" rel="stylesheet"></link>
                
            </head>
            <body id="bootstrap-overrides">
                        <h1 class="animate-character centrealign">Work Experiences</h1>
                        <section id="cd-timeline" class="cd-container">
                            <div class="cd-timeline-block">
                            <div class="cd-timeline-img cd-picture">
                            </div>

                            <div class="cd-timeline-content">
                                <h2>July 2022 - Present</h2>
                                <h5>Wells fargo - Program Associate</h5>
                                <p>
                                    <li>Addressed and fixed complex bugs</li>
                                    <li>Performed unit testing and code upliftment for .NET based applications</li>
                                    <li>Explored tools such as Splunk and Elastic APM</li>
                                </p>
                                
                            </div> 
                            </div> 

                            <div class="cd-timeline-block">
                            <div class="cd-timeline-img cd-movie">
                            </div> 

                            <div class="cd-timeline-content">
                                <h2>Jan 2022 - July 2022</h2>
                                <h5>Wells fargo - Internship</h5>
                                <p>
                                    <li>Worked with newer technologies such as Metaverse and Unity</li>
                                    <li>Developed a banking in metaverse application using Unity and blockchain</li>
                                </p>
                                
                            </div> 
                            </div> 

                            <div class="cd-timeline-block">
                            <div class="cd-timeline-img cd-movie">
                            </div> 

                            <div class="cd-timeline-content">
                                <h2>June 2021 - August 2021</h2>
                                <h5>Optum Global Solutions - Summer Internship</h5>
                                <p>
                                    <li>Assigned with responsibilities of building a feature toggle feature for an existing application</li>
                                    <li>Language - Java</li>
                                </p>
                                
                            </div> 
                            </div> 
                            
                        </section> 
                        <section>
                            <h1 class="animate-character">Projects</h1>
                            <Accordion defaultActiveKey="">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h4>Flask Weather App</h4></Accordion.Header>
                                <Accordion.Body>
                                <p>A weather app with built in login functionality to get the current weather conditions, daily weather forecast and some cool weather facts.</p>
                                <p>Github link : <a href="https://github.com/Ritika1705/Flask-Weather-App">https://github.com/Ritika1705/Flask-Weather-App</a></p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <div class="accordian-header">
                                    <Accordion.Header><h4>Github API using React</h4></Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                    <p>This project was bootstrapped with Create React App. A simple web app to fetch github user details as well as the repository details.</p>
                                    <p>Github link : <a href="https://github.com/Ritika1705/github_api">https://github.com/Ritika1705/github_api</a></p>
                                    </Accordion.Body>
                                
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <div class="accordian-header">
                                    <Accordion.Header><h4>Todo List app with RASA chatbot integration</h4></Accordion.Header>
                                    </div>
                                    <Accordion.Body>
                                    <p>
                                    RASA is an open-source chatbot framework based on machine learning. With the help of it, we can easily create highly accurate chatbots and can easily integrate these chatbots with our website, telegram, Facebook, Whatsapp, etc.
                                    This is a simple REACT based todo list application with a RASA chatbot integration.
                                    </p>
                                    <p>Github link : <a href="https://github.com/Ritika1705/todo_list_with_chatbot_integration">https://github.com/Ritika1705/todo_list_with_chatbot_integration</a></p>
                                    </Accordion.Body>
                                
                            </Accordion.Item>
                            </Accordion>
                            
                        </section>
                        <section>
                            <h1 class="animate-character">Welcome to the fun part of my life !!</h1>
                        </section>
                
                
            </body>
        </>
    )
}

export default About;