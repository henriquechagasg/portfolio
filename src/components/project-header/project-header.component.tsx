import { UseLanguage } from '../../contexts/language-context/language.context'
import { RiExternalLinkLine } from 'react-icons/ri'
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import styles from './project-header.module.scss'

import { ProjectType } from '../../contexts/context-data/projects'
import { useRouter } from 'next/router'
import { projects } from '../../contexts/context-data/projects' 
import { SwitchLanguage } from '../switch-language/switch-language.component'
import { useRef } from 'react'

type ProjectHeaderProps = {
    projectIndex: number,
    project: ProjectType,
    themeColor: string
}

export function ProjectHeader({ 
    projectIndex,  
    project, 
    themeColor } : ProjectHeaderProps) {


    const router = useRouter()
    const {language} = UseLanguage()

    const nextProjectIndex = projectIndex === projects.length - 1 ? 0 : projectIndex + 1
    const prevProjectIndex = projectIndex === 0 ? projects.length - 1  : projectIndex - 1
    const nextProject = projects[nextProjectIndex].id
    const prevProject = projects[prevProjectIndex].id
    // Getting next and prev project

    //linksRef
    const githubLink = useRef<HTMLAnchorElement>(null)
    const websiteLink = useRef<HTMLAnchorElement>(null)



    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.projectTitle}>{project.title[`${language}`]}</h1>
                <div className={styles.linksContainer}>
                    {
                        project.links.website &&
                        <>
                        <RiExternalLinkLine 
                            onClick={() => websiteLink.current.click()}
                            className={styles.projectLink}
                        />
                        <a 
                            href={project.links.website} 
                            style={{display: "none"}}
                            ref={websiteLink}
                            target="_blank"
                         /> 
                         </>
                    }  
                    <FaGithub 
                        onClick={() => githubLink.current.click()}
                        className={styles.githubLink}
                        style={
                            project.links.website && 
                            { marginLeft: "3rem"}
                        }
                    />
                    <a 
                        href={project.links.github} 
                        style={{display: "none"}}
                        ref={githubLink}
                        target="_blank"
                    />

                </div>
            </div>
            <div className={styles.bgImage}>
                <img src={project.image} alt="No image =/" />
            </div>
            <FaChevronLeft 
                className={styles.arrowleft}
                onClick={() => router.push(`/${prevProject}`)}    
            />
            <FaChevronRight 
                className={styles.arrowright}
                onClick={() => router.push(`/${nextProject}`)}    
            />
            <div 
            className={styles.homeButton}
            style={{backgroundColor: themeColor}}
            onClick={() => router.push('/')}
            >
                <HiHome />
            </div>
            <SwitchLanguage />
        </div>

    )
}