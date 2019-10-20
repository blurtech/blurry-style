/*
MAIN USAGE IDEA
...
*/

import React from "react";
import styles from "./Button.module.scss";

/*
 Style variants:
   [Primary] = black background, white text
   [Secondary] = white background, black text, black border
   [Disabeled] = white background, gray border and text
   [Switch square btns < and > ] = check style example
   onHover = red line below text
*/

interface BTNProps {
  text: string;
  type?: string;
  disabeled?: boolean;
}

const Button = (props: BTNProps) => {
  const { type, disabeled } = props;
  return (
      <button
      disabled={disabeled}
      className={styles[`${disabeled ? "disabeled" : type}`]}
    >
      {props.text}
      <div className={styles['red-line']}> </div>
    </button>
  )
}

export default Button;
