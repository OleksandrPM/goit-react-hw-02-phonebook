import PropTypes from 'prop-types';
import Contact from './Contact';
import css from './ContactList.module.css';

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

function ContactList({ contacts }) {
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contact_list}>
          {contacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <li className={css.contact_item} key={id}>
                <Contact name={name} number={number} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
