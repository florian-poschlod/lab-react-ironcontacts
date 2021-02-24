import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  addRandomContact = () => {
    this.setState((state, props) => ({
      contacts: [...this.state.contacts, contacts[Math.floor(Math.random() * Math.floor(contacts.length))]]
    }))
  }

  // Why does this function crash the app and the one above doesn't?
  // addRandomContact() {
  //   this.setState((state, props) => ({
  //     contacts: [contacts[11], ...this.state.contacts]
  //   }))
  // }

  render() {

    const contactsList = this.state.contacts.map(contact => {
      return (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} style={{ width: '80px', height: 'auto' }} /></td>
          <td>{contact.name}</td>
          <td>{contact.name}</td>
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