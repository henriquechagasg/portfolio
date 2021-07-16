//components
import { Title } from '../underlined-title/underlined-title.component'
import { Technologie } from '../technologie-card/technologie-card.component'

//utils
import styles from './project-stack.module.scss'
import { TechnologieType } from '../../contexts/context-data/technologies'

type ProjectStackProps = {
    technologies: TechnologieType[],
    themeColor: string
}

export function ProjectStack({technologies, themeColor}: ProjectStackProps) {
    return (
        <div className={styles.container}>
                <Title title={"Stack"} underlineColor={themeColor}/>
            <div className={styles.underline}></div>
            <div className={styles.technologies}>
                { technologies.map((tech, i) => 
                <Technologie 
                    key={i}
                    name={tech.name}
                    imgSrc={tech.imgSrc} 
                />)
                }
            </div>
        </div>
    )
}