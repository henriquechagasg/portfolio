import styles from './about-me.module.scss'
import technologies from '../../contexts/context-data/technologies';

import { Technologie } from '../technologie-card/technologie-card.component'
import { UseLanguage } from '../../contexts/language-context/language.context';
import { Title } from '../underlined-title/underlined-title.component';
import { useLocation } from '../../contexts/locationref-context/locationref.context';
import { aboutme, allSkillsType} from './descriptions'

export const AboutMe = () => {

    const {language} = UseLanguage()
    const { aboutRef } = useLocation()

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
                    {
                        allSkillsType.map((skillType, index) => {
                            return (
                                <>
                                <h2 key={index}>{skillType.skillType[`${language}`]}</h2>
                                <div key={index} className={styles.skills}>
                                    {
                                        technologies
                                        .filter(tech => skillType.skills.includes(tech.name))
                                        .map((tech, index) => {
                                            return (
                                                <Technologie
                                                    key={index} 
                                                    name={tech.name}
                                                    imgSrc={tech.imgSrc} 
                                                />
                                            )
                                        })

                                    }
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
    )
}