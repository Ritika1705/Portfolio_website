import '../src/App.css';
import Accordion from 'react-bootstrap/Accordion';
import '../src/bunnyimg.svg'
import {useNavigate} from "react-router-dom";

function Contact()
{
    const history = useNavigate();
    function submitfunc()
    {
        //e.preventDefault();
        history('/');
        alert('hello');

    }
    return(
        <>
            <head>
                <link rel="stylesheet" href="App.css"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Share+Tech+Mono&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <body class="contact_body">
                <section class="green"> 
                <div className='parent'>
                    <div class="form-container child"> 
                        <h2 class="contact_h2">Contact Us!</h2>
                        <form method="POST" action="mailto: pawansingh4418@gmail.com?subject=Feedback from the viewers" enctype="text/plain" onsubmit="return submitfunc();">
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message' name="user_feedback"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email' name='user_email' required />
                            </div>
                            <button type="submit" class="btn btn-primary contact_button">Submit</button>
                        </form>
                    </div>
                    <div className='child2'>
                        <img src="https://freesvg.org/img/1534892385.png" class="bunny_img"></img>
                    </div>
                </div>
                <div class="curve"></div>
                </section>
                <section>
                    <div class= "anchor_parent">
                        <a class="a_child" href="https://www.linkedin.com/in/ritika-mandal/"><i class="fa fa-linkedin-square" style={{'font-size':'36px', color:'white'}}></i></a>
                        <a class="a_child" href="https://github.com/Ritika1705"><i class="fa fa-github" style={{'font-size':'36px', color: "white"}}></i></a>
                        <a class="a_child" href = "mailto: s.ritika1705@gmail.com"><i class="fa fa-envelope" style={{'font-size':'36px', color: "white"}}></i></a>
                    </div>
                </section>
                
            </body>
        </>

    )
} 

export default Contact;