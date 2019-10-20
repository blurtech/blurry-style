import React from "react"
import styles from "./CheckBox.module.scss"

interface INProps {
  type:string // type of checkbox (menu, box, list etc)
}

const CheckBox = (props: INProps) => {
  return(
    <button className={styles[`${props.type}`]}/>
  )
}

export default CheckBox