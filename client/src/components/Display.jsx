import styles from './Display.module.css';

export default function Display({ name, cost, category }) {
    return (
        <div className={styles.container}>
            <strong
                className={styles.title}>
                {name}
            </strong>
            <p
                className={styles.category}>
                {category}
            </p>
            <p
                className={styles.cost}>
                {cost}
            </p>
        </div>
    )
}