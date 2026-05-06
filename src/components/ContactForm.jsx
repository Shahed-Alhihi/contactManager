import { useState } from "react";

const contactForm=({addContact}) =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    let handleSubmit=(e)=>{
         e.preventDefault();
        const newContact = {
            name, email
    };
    addContact(newContact)
    setName("");
    setEmail("");

}

return(
       <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />
                 <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Contact
                </button>
            </form>

                

                </div>
    
  
);
};


export default contactForm