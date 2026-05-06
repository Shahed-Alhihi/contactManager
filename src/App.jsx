import { useState } from 'react'
import './App.css'
import ContactForm from'./components/ContactForm'
import List from './components/List'

function App() {
  const [contacts, setContact] = useState([])

  const addContact=(newContact) =>{
    setContact([...contacts, newContact]);

  };

  const deleteContact=(contactID)=>{
    setContact(contacts.filter((contacts,index)=> index!==contactID));
  };


  return (
    <>
    <div className='app-container'>
      <h1> Contact Manager App </h1>
   
    
     <ContactForm addContact={addContact}/>
      <List contacts={contacts} deleteContact={deleteContact }/>

    
 </div>
        
         
       


    </>
  );
}

export default App
