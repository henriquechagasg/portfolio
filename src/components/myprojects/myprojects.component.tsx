import { UseLanguage } from '../../contexts/language-context/language.context';
import styles from './myprojects.module.scss';
import { projects } from '../../contexts/context-data/projects'
import { Title } from '../underlined-title/underlined-title.component';
import { useRouter } from 'next/router'
import { useLocation } from '../../contexts/locationref-context/locationref.context';


export const Projects = () => {

    const router = useRouter()

    const {language} = UseLanguage()
    const { projectsRef } = useLocation()


    return (
        <div className={styles.container} ref={projectsRef}>
            <Title 
                title={language === "pt" ? "Projetos": "Projects"}
                underlineColor={"#50fa7b"}
            />
            <div className={styles.projectsFlex}>
                {projects.map((project, i) => {
                    return (
                        <div key={i} className={styles.card}>
                            <div className={styles.projectImage}>
                                <img src={project.image} alt="No Image" />
                            </div>
                            <div className={styles.projectDetails}>
                                <h2>{project.title[`${language}`]}</h2>
                                {project.description[`${language}`].map((p, i) => <p key={i}>{p}</p>)}
                                <div className={styles.buttonContainer}>
                                    <button
                                        onClick={() => router.push(`${project.id}`)}
                                    >{language === "pt" ? "Ver Projeto": "Check Project"}</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}