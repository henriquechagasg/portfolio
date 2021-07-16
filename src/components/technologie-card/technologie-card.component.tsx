import styles from './technologie-card.module.scss';

export const Technologie = ({name, imgSrc}) => {

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`${imgSrc}`} alt="err"/>
            </div>
            <p style={{fontSize: "0.9rem"}}>{name}</p>
        </div>
    )
}