import styles from './particles.module.scss'

export const Particles = () => {

    return (
        <div className={styles.animationWrapper}>
            <div className={`${styles.particle} ${styles.particle1}`}></div>
            <div className={`${styles.particle} ${styles.particle2}`}></div>
            <div className={`${styles.particle} ${styles.particle3}`}></div>
            <div className={`${styles.particle} ${styles.particle4}`}></div>
        </div>
    )
}