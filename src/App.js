import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
      unrenderedContacts: contacts.slice(5)
    }
  }

  addRandomContact = () => {
    const randIndex = Math.floor(Math.random() * this.state.unrenderedContacts.length);
    const randomContact = this.state.unrenderedContacts[randIndex];
    const unrenderedContacts = [...this.state.unrenderedContacts];
    unrenderedContacts.splice(randIndex, 1)

    this.setState({
      contacts: [...this.state.contacts, randomContact],
      undrenderedContacts: unrenderedContacts
    })
  }

  render() {

    const contactsList = this.state.contacts.map(contact => {
      return (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} style={{ width: '80px', height: 'auto' }} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
      )
    })

    return (

      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contactsList}
        </table>
      </div>
    );
  }
}

export default App;