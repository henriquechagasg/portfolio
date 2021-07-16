// components
import Head from 'next/head'
import { ProjectHeader } from "../components/project-header/project-header.component"
import { ProjectStack } from "../components/project-stack/project-stack.component"
import { Title } from "../components/underlined-title/underlined-title.component"

// utils
import styles from '../styles/Project.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next';
import { randomNumber } from "../utils/randomNumber"
import { UseLanguage } from "../contexts/language-context/language.context"

// data
import technologies from "../contexts/context-data/technologies"
import { projects, ProjectType } from "../contexts/context-data/projects"
import { colors } from "../contexts/context-data/colors"


type ProjectProps = {
    c_project: ProjectType,
    index: number
}


export default function Project({c_project, index}: ProjectProps) {
    
    const themeColor = colors[randomNumber(0, colors.length)]
    const { language } = UseLanguage()


    return (
        <>
        <Head>
            <title>{`Henrique | ${c_project.title[`${language}`]}`}</title>
        </Head>
        <ProjectHeader  
            projectIndex={index}
            project={c_project} 
            themeColor={themeColor}/>
            <ProjectStack 
            technologies={technologies.filter(tech => c_project.stack.includes(tech.name))}
            themeColor={themeColor}
            />
        <div className={styles.container}>
            <Title 
                title={language === "pt" ? "Detalhes do projeto" : "Project Details"}
                underlineColor={themeColor}
            />
            { c_project.about.map((paragraph, i) => {
                return (
                    <div key={i} className={styles.paragraph}>
                        <div className={styles.text}>
                            <h2>{paragraph.title[`${language}`]}</h2>
                            { 
                                paragraph.text && 
                                paragraph.text[`${language}`].map((p, i) => <p key={i}>{p}</p> )
                            }
                        </div>
                        <div className={styles.img}>
                            <img 
                            src={`${paragraph.image}`} 
                            alt="error"
                            />
                        </div>
                </div>        
                )
            })}
        </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { project } = ctx.params;
    const projectIndex = projects.map(project => project.id).indexOf(`${project}`)
    const c_project = projects[projectIndex] 

    return {
        props: {
            c_project,
            index: projectIndex
        }
    }
}