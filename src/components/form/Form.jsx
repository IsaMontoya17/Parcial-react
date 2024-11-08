import React from 'react';
import Card from '../card/Card';
import styles from "./Form.module.css";

const Form = ({ formData, handleChange, handleSubmit, showSummary, error }) => {
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formField}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="favoriteColor">Color Favorito:</label>
                    <input type="text" name="favoriteColor" id="favoriteColor" value={formData.favoriteColor} onChange={handleChange}/>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
                </div>
                <button type="submit">Enviar</button>
            </form>

            {error && (
                <p className={styles.error}>Por favor chequea que la información sea correcta.</p>
            )}

            {showSummary && (
                <Card
                    name={formData.name}
                    favoriteColor={formData.favoriteColor}
                    email={formData.email}
                />
            )}
        </div>
    );
};

export default Form;
