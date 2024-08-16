import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <>
      <div class={styles.loaderContainer}>
        <div class={styles.loader}></div>
      </div>
    </>
  );
}

export default Loader;
