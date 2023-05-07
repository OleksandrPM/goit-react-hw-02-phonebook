import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { debounce } from 'lodash';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChangeFilterInput = debounce(event => {
    this.setState({ filter: event.target.value.trim().toLowerCase() });
  }, 300);

  render() {
    // console.log(this.state.filter); //delete
    // const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        <section className={css.contacts}>
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.onChangeFilterInput}
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </section>
      </div>
    );
  }
}

export default App;
