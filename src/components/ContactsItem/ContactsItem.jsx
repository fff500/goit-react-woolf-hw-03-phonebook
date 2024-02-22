import style from './ContactsItem.module.css';

export const ContactsItem = ({ id, name, number, deleteContact }) => {
    const handleDeleteClick = () => {
        deleteContact(id);
    }


    return (
        <li className={style.item}>
            <span>{name}: {number}</span>
            <button className={style.button} onClick={handleDeleteClick}>Delete</button>
        </li>
    )

}
