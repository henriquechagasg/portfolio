import axios from 'axios'
import qs from 'qs'
import getConfig from 'next/config';


import styles from './contact.module.scss';

import { useState, useRef } from 'react';
import { Spinner } from '../with-spinner/with-spinner.component';
import { Title } from '../underlined-title/underlined-title.component';
import { UseLanguage } from '../../contexts/language-context/language.context';
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { useLocation } from '../../contexts/locationref-context/locationref.context';


export const Contact = () => {
    const {language} = UseLanguage()
    const { contactRef } = useLocation()

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [showSpinner, setShowSpinner] = useState(false)
    const [showGreetings, setShowGreetings] = useState(false)

    //links
    const mailLink = useRef<HTMLAnchorElement>(null)
    const githubLink = useRef<HTMLAnchorElement>(null)
    const linkedinLink = useRef<HTMLAnchorElement>(null)
    const wppLink = useRef<HTMLAnchorElement>(null)

    // form data
    const nameRef = useRef<HTMLInputElement>(null)
    const mailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const { publicRuntimeConfig } = getConfig();

    const clearInputs = () => {
        nameRef.current.value = ""
        mailRef.current.value = ""
        messageRef.current.value = ""
    }

    const toggleShowGreetings = () => {
        setShowGreetings(!showGreetings)
    }

    const sendEmail = () => {
        if (name && mail && message) {
            setShowSpinner(true)
            const data = {
                to:"henriquechagasg@gmail.com",
                subject: "NOVO CONTATO - PORTFOLIO",
                text: 
`
Someone just let us a message on our Portfolio.
Name: ${name} 
Email: ${mail}
${message}

Hurry Up and get in get in touch!!
`,
                API_KEY: publicRuntimeConfig.API_KEY
            }
            axios({
                method: "POST",
                url: publicRuntimeConfig.backendUrl,
                data: qs.stringify(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(result=> {
                toggleShowGreetings()
                setShowSpinner(false)
                clearInputs()
            })
            .catch(err=> {
                setShowSpinner(false)
                alert("Desculpe, ocorreu algum erro, entre em contato por outros meios.")
            })
            return
        }
        alert("Não é possível enviar com campos vazios.")
    }

    return (
        <>
        <div className={styles.container} ref={contactRef}>
            <Title 
                title={language === "pt" ? "Contato": "Contact"}
                underlineColor={"#ff79c6"}
            />
            <div className={styles.card}>
                <div className={styles.inputData}>
                    <input 
                    id="name" 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    ref={nameRef}
                    required 
                    />
                    <div className={styles.formUnderline}></div>
                </div>
                <div className={styles.inputData}>
                    <input 
                    id="mail" 
                    type="text" 
                    onChange={(e) => setMail(e.target.value)}
                    ref={mailRef}
                    required 
                    />
                    <div className={styles.formUnderline}></div>
                </div>
                <div className={styles.textarea}>
                    <textarea 
                    id="message"
                    ref={messageRef} 
                    onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.button} onClick={sendEmail}>
                        <span>Send</span>
                        {showSpinner ? (
                            <Spinner 
                            width={20}
                            height={20}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className={styles.linksContainer}>
                    <div 
                        className={styles.link}
                        onClick={() => mailLink.current.click()}
                    >
                        <MdEmail className={styles.icon} />              
                        <p>henriquechagasg@gmail.com</p>
                    </div>
                    <a 
                        style={{display: "none"}} 
                        href="mailto:henriquechagasg@gmail.com"
                        ref={mailLink} 
                    />
                <div 
                    className={styles.link}
                    onClick={() => githubLink.current.click()}
                >                    
                    <FaGithub className={styles.icon} />
                    <p>github.com/henriquechagasg</p>
                    <a 
                        style={{display: "none"}} 
                        href="https://github.com/henriquechagasg"
                        ref={githubLink} 
                        target="_blank"
                    />
                </div>
                <div 
                    className={styles.link}
                    onClick={() => linkedinLink.current.click()}
                >
                    <ImLinkedin2 className={styles.icon} />
                    <p>linkedin.com/henriquechagasg</p>
                    <a 
                        style={{display: "none"}} 
                        href="https://www.linkedin.com/in/henriquechagasg"
                        ref={linkedinLink} 
                        target="_blank"
                    />
                </div>
                <div 
                    className={styles.link}
                    onClick={() => wppLink.current.click()}
                >   
                    <FaWhatsapp className={styles.icon} />
                    <p> 553799132195</p>
                    <a 
                        style={{display: "none"}} 
                        href={
                            language === "pt" ? "https://api.whatsapp.com/send?phone=553799132195&text=Oi%20Henrique%21%20Gostei%20muito%20do%20seu%20portf%C3%B3lio."
                            : "https://api.whatsapp.com/send?phone=553799132195&text=Hi%20Henrique%21%20I%20really%20enjoyed%20your%20portfolio."
                        }
                        ref={wppLink} 
                        target="_blank"
                    />
                </div>                                
            </div>  
        </div>
        {showGreetings ? (
        <div className={styles.greetingsContainer} onClick={toggleShowGreetings}>
            <div className={styles.card} onClick={(e) => e.stopPropagation()}>
                {
                    language === "pt" ? (
                        <>
                        <p>Sua mensagem foi enviada.</p>
                        <p>Agradeço por ter entrado em contato. Se necessário, entrarei em contato o quanto antes.</p>
                        </>
                    ) : (
                        <>
                        <p>Your message has been sent!</p>
                        <p>I really apreciate for getting in touch. If necessary, I'll get back to you as soon as possible.</p>
                        </>
                    )
                }
                <p></p>
                <div className={styles.ButtonContainer}>
                    <button onClick={toggleShowGreetings}>Fechar</button>
                </div>
            </div>
        </div>
        ): null}
        </>
    )
}