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


  sortByName = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    this.setState({
      contacts: sortedContacts
    })
  }


  sortByPopularity = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) => {
      return b.popularity - a.popularity
    })

    this.setState({
      contacts: sortedContacts
    })
  }


  deleteContact = (event) => {
    const targetIndex = this.state.contacts.findIndex(contact => contact.id === event.target.id)
    // const cleanedContacts = [...this.state.contacts].splice(targetIndex, 1)  <--- why does this one-liner delete everything but the target element?
    const cleanedContacts = [...this.state.contacts]
    cleanedContacts.splice(targetIndex, 1)

    this.setState({
      contacts: cleanedContacts
    })
  }


  render() {

    const contactsList = this.state.contacts.map(contact => {
      return (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} style={{ width: '80px', height: 'auto' }} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td><button id={contact.id} onClick={this.deleteContact}>Delete</button></td>
        </tr>
      )
    })

    return (

      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {contactsList}
        </table>
      </div>
    );
  }
}

export default App;