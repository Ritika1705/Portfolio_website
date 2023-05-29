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
                            <div class="main">
                                <ul class="cards">
                                    <li class="cards_item">
                                    <div class="card">
                                        <div class="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. "></img></div>
                                        <div class="card_content">
                                        <h2 class="card_title">Dance is my oxygen</h2>
                                        <div class="card_text">
                                            <p>Well sitting in front of the laptop is not always what I do. You gotta get up and move that lazy body of yours.</p>
                                            <p>Dancing since the age of 5, it acts as a serotonin boost and walla.. the world seems a happy place yet again</p>
                                        </div>
                                        </div>
                                    </div>
                                    </li>

                                    <li class="cards_item">
                                    <div class="card">
                                        <div class="card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. "></img></div>
                                        <div class="card_content">
                                        <h2 class="card_title">Ultimate Reuben &#x2022; $18</h2>
                                        <div class="card_text">
                                            <p>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.
                                            </p>
                                            <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle. The only thing we didn't make on the premises is the toothpick ( but we're looking into how to do that). </p>
                                            <p>This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle. No substitions please!</p>
                                            <p>Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li class="cards_item">
                                    <div class="card">
                                        <div class="card_image"><img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. "></img></div>
                                        <div class="card_content">
                                        <h2 class="card_title">Fig &amp; Berry Plate &#x2022; $16</h2>
                                        <div class="card_text">
                                            <p><span class="note">Seasonal.</span></p>
                                            <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
                                            <p>Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce. </p>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                        </section>
                
                
            </body>
        </>
    )
}

export default About;