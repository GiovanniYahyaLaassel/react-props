import React from "react";
import styles from "./Card.module.css";

// Destrutturo i props e li faccio accettare da card
function Card({title, content, image, tags}) {
    console.log('title component:', title);
    console.log('tags array:', tags);


    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>

                {/* se un immagine e vuota oppire undefined allora uso quella di defualt */}

                <img src={image ? image :"https://placehold.co/600x400"} alt={title} />
            </div>
            <h2>{title}</h2>
            {/* mappo per creare un span per ognuno */}
            <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}

 
       
            </div>

            <p>{content}</p>
        </article>
    )
}

export default Card;