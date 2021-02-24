import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


function App(props) {

  const contactsList = contacts.map((contact, index) => {
    if (index < 5) {
      return (

        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} style={{ width: '80px', height: 'auto' }} /></td>
          <td>{contact.name}</td>
          <td>{contact.name}</td>
        </tr>
      )
  }
})


return (

  <div className="App">
    <h1>Iron Contacts</h1>
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

export default App;
