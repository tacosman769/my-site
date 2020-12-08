import React from 'react';
import emailjs from 'emailjs-com';
import twittericon from '../Twitter_Logo_Black.png';
import instaicon from '../instalogo.png';
import githubicon from '../mark-github.svg';
import Discordicon from '../iconmonstr-discord-1.svg';
import redditicon from '../reddit.svg';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './style.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactUs() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_k1uvx3a', e.target, 'user_ggP5l5GcWbsoUaCmNR8ck')
            .then((result) => {
                setOpen(true);
                console.log(result.text);
            }, (error) => {
                alert("FAILED...", error.text);
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div>
                <ul className="links">
                    <li>
                        <a href="https://twitter.com/fu_takos_"
                            target="_blank"
                            rel="noopener"
                            class="App-link">
                            <img src={twittericon} className="icon" alt="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/taco_sman/"
                            target="_blank"
                            rel="noopener"
                            class="App-link">
                            <img src={instaicon} className="icon" alt="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/tacosman769"
                            target="_blank"
                            rel="noopener"
                            class="App-link">
                            <img src={githubicon} className="icon" alt="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="クソハム#8423"
                            target="_blank"
                            rel="noopener"
                            class="App-link">
                            <img src={Discordicon} className="icon" alt="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/user/Initial-Dark4159"
                            target="_blank"
                            rel="noopener"
                            class="App-link">
                            <img src={redditicon} className="icon" alt="icon" />
                        </a>
                    </li>
                </ul>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" id="fname" name="user_name" placeholder="Your name.." required />
                <label>Email</label>
                <input type="email" id="email" name="user_email" placeholder="Your email" required />
                <label>Message</label>
                <textarea name="message" id="subject" placeholder="Write something.." required />
                <input type="submit" value="Send" className="submitbutton" />
            </form>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Succsess!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Thank you!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}