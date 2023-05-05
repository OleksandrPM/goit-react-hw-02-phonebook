import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

function Contact({ name, number }) {
  return (
    <>
      <p className={css.name}>{name}:</p>
      <p className={css.number}>{number}</p>
      <button className={css.delete_btn}>Delete</button>
    </>
  );
}
