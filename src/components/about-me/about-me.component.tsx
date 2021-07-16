import styles from './about-me.module.scss'
import technologies from '../../contexts/context-data/technologies';

import { Technologie } from '../technologie-card/technologie-card.component'
import { UseLanguage } from '../../contexts/language-context/language.context';
import { Title } from '../underlined-title/underlined-title.component';
import { useLocation } from '../../contexts/locationref-context/locationref.context';

export const AboutMe = () => {

    const {language} = UseLanguage()
    const { aboutRef } = useLocation()

    const aboutme = {
        pt: [
        `Olá, meu nome é Henrique, tenho 24 anos, 
trabalho como auxiliar administrativo na empresa CH3, fábrica de confeccção de roupas femininas em Divinópolis-MG,
e sou desenvolvedor amador aspirante a dev Junior.`,
        "Comecei a programar fazendo cursos de python e data science, afim de aprender Trade quantitativo.",
        `Contudo, surgiu no meu trabalho o desafio de criar um e-commerce que fosse fácil de usar e que acompanhasse 
o estoque atual do software da empresa. Com o conhecimento que tinha de programação até então, sabia que era possível 
realizar a tarefa, mas tinha em mente que Node.js se adequaria mais ao caso.`,
        `Me dediquei a aprender essa linguagem e desenvolvimento Web somente para resolver o problema, mas desde então, acabei
sendo fisgado pelo universo da programação.`,
        `Aprendi muito desenvolvendo projetos pessoais e para a empresa onde trabalho, mas acredito que seja hora de ir além. 
Meu objetivo atual é participar de projetos que impactem de forma positiva a vida das pessoas e , como bônus, crescer como programador.`,
        `Confira meus projetos abaixo e não esqueça de deixar seu feedback.😉`
        ],
        en: [
            "Hi there, my name is Henrique, I'm 24 years old and I'm an amateur developer who is trying to turn into Junior Dev.",
            "Currently I'm working as management assistant for CH3, a female clothing factory from Minas Gerais, Brazil.",
            "I've started coding diving into python and data science courses, in attempt to learn quantitative trading.",
            `However, my work came up with the challenge of creating an e-commerce that was of easy usage and that kept up with the current stock of the company's software. 
With my knowledge of programming so far, I knew the task could be done, but I had in mind that Node.js would suit the case better.`,
            `So I dedicated myself to learn this language and web development just to solve the problem, but since then, 
I ended up being hooked by the universe of programming.`,
            `I learned a lot while developing projects for myself and for the company i work, but I believe it is time to go further. 
My current goal is to participate of projects that has a positive impact in people's life and, as a bonus, grow as a programmer.`,
            `Checkout my projects below and don't forget to leave your feedback.😉`
        ]

    }

    return (
            <div className={styles.container} ref={aboutRef}>
                <Title 
                title={language === "pt" ? "Sobre Mim": "About Me"}
                underlineColor={"#6272a4"}
                />
                <div className={styles.card}>
                    <p>{aboutme[`${language}`].map((p, i) => {
                        return <p key={i} style={{margin:5}}>{p}</p>
                    })}</p>
                    <h2>{language === "pt" ? "Tecnologias já utilizadas" : "Technologies I've worked with"}</h2>
                    <div className={styles.technologies}>
                        {technologies.map((tech, index) => {
                            return (
                                
                                <Technologie
                                key={index} 
                                name={tech.name}
                                imgSrc={tech.imgSrc} 
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}