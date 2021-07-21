import styles from './technologie-card.module.scss';
import { TechnologieType } from '../../contexts/context-data/technologies';



export const Technologie = ({name, imgSrc}: TechnologieType) => {

    return (
        <div className={styles.card}>
            {imgSrc && 
                <div className={styles.image}>
                    <img src={`${imgSrc}`} alt="err"/>
                </div>
            }
            <p style={{fontSize: "0.9rem"}}>{name}</p>
        </div>
    )
}