import styles from './underlined-title.module.scss'

type TitleProps = {
    title: string,
    underlineColor: string
}

export function Title({title, underlineColor}: TitleProps) {

    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.underline} style={{backgroundColor: underlineColor}}></div>
        </div>  
    )
}