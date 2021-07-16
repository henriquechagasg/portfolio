import description from './descriptions';
import styles from './header.module.scss'

import { UseLanguage } from '../../contexts/language-context/language.context';
import { useEffect, useState } from 'react';
import { SwitchLanguage } from '../switch-language/switch-language.component';
import { useLocation } from '../../contexts/locationref-context/locationref.context';

export const Header = () => {

    const { language } = UseLanguage()
    const { 
        aboutRef,
        projectsRef,
        contactRef 
    } = useLocation()

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (typeof(window) !== undefined) {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })

            window.addEventListener("resize", () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            })
        }
    },[])



    return (
        <header className={styles.container}>   
            <div className={windowSize.width && windowSize.width > 800 ?  styles.helloWorld : "hidden"}>
                <p><span style={{color: "#ffb86c", fontStyle: "italic" }}>res</span>.
                <span style={{color: "#f8f8f2"}}>send</span>
                <span>(</span>
                <span style={{color: "var(--yellow)"}}>{language === "pt" ? (`\"Bem vindo(a)!\"`) : (`\"Welcome!\"`)}</span>
                <span>)</span></p>
            </div>
            <div className={windowSize.width && windowSize.width < 800 ? styles.helloWorldMob : "hidden"}>
            <span style={{color: "#ffb86c", fontStyle: "italic" }}>res</span>
            <div className={styles.send}><p>.</p><p style={{color: "#f8f8f2"}}>send</p>(</div>
            <span style={{color: "var(--yellow)"}}>{language === "pt" ? (`\"Bem vindo(a)!\"`) : (`\"Welcome!\"`)}<span style={{color: "white"}}>)</span></span>
            </div>
            <div className={styles.subtitle}>
                {description.headerPresentation[`${language}`].map((p:string, i:number) => {
                    return <p key={i}>{p}</p>
                })}
            </div>
            <div className={styles.buttons}>
                <button
                    onClick={() => aboutRef.current.scrollIntoView()}
                >
                    {language === "pt" ? ("Sobre mim") : ("About me")}
                </button>
                <button
                    onClick={() => projectsRef.current.scrollIntoView()}
                >
                    {language === "pt" ? ("Projetos") : ("Projects")}
                </button>
                <button
                    onClick={() => contactRef.current.scrollIntoView()}
                >
                    {language === "pt" ? ("Contato") : ("Contact")}
                </button>
            </div>
           <SwitchLanguage />
        </header>
    )
}
