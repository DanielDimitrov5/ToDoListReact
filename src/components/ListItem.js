import styles from  './ListItem.module.css'

function ListItem({
    task,
    isDone,
    onDelete,
    onClick
}) {

    const style = isDone === true 
                    ? `${styles.listItem} ${styles.listPointer}`
                    : styles.listPointer;

    return (
        <li className={style} onClick={onClick}>{task} <b onClick={onDelete}>X</b></li>
    )
}

export default ListItem;