import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <ul className={s["contact-list"]}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={s["contact-list-item"]}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
                handleDelete={deleteContact}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
