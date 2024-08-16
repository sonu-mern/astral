import React from "react";
import styles from "./components.module.css"; // Import the styles

function Button({
  name,
  icon,
  onClick,
  style,
  type,
  disabled = false,
  showBtnLoader = false,
  loaderText = "loading ...",
  btnHref,
  color,
}) {
  return (
    <>
      <button
        className={`${
          disabled || showBtnLoader ? styles.btndisabled : styles.reuseablebtn
        }`}
        onClick={onClick}
        style={style}
        type={type}
        disabled={disabled || showBtnLoader}
      >
        {showBtnLoader ? (
          <>
            <div className={styles.btnLoader}>{loaderText}</div>
          </>
        ) : (
          <>
            <div>{icon}</div>
            {btnHref ? (
              <a href={btnHref} style={{ color: color }}>
                {name}
              </a>
            ) : (
              <div style={{ color: color }}>{name}</div>
            )}
          </>
        )}
      </button>
    </>
  );
}

export default Button;
