import styles from './with-spinner.module.scss'


export const Spinner = ({width, height}) => {
        return (
            <div className={styles.overlay}>
                <div 
                className={styles.container} 
                style={{
                    width : `${width}px`,
                    height: `${height}px`,
                }}>
                </div>
            </div>
        )
} 
