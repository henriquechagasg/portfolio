import Switch from "react-switch";
import { useState, useEffect } from "react";
import { UseLanguage } from "../../contexts/language-context/language.context";

import styles from './switch-language.module.scss'


export function SwitchLanguage() {

    const { language, toggleLanguage } = UseLanguage()
    const [checked, setChecked] = useState(false)

    function handleChange() {
        setChecked(!checked)
        toggleLanguage()
    }

    useEffect(() => {
        if (language === "en") {
            setChecked(true)
        }
    }, [])

    return (
        <div className={styles.container}>
            <span>pt</span>
            <Switch 
            onChange={handleChange} 
            checked={checked}
            onColor={"#6F6F6F"}
            offColor={"#6F6F6F"} 
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={19}
            height={15}
            width={38}
            />
            <span style={checked ? {marginLeft: "10px"} : null}>en</span>
        </div>
    )
}