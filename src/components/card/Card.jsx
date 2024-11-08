import React from 'react'
import styles from "./Card.module.css";

const Card = ({ name, favoriteColor, email }) => {
    return (
        <div className={styles.card}>
            <h3>Información del Usuario</h3>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Color Favorito:</strong> {favoriteColor}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default Card