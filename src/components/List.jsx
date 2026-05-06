import Item from "./Item";


function List({contacts,deleteContact}){
    return (
        <div>
            <h2>Contacts list</h2>

           { contacts.map((contacts,index)=>(
                <Item
                key={index}
                order={index+1}
                index={index}
                contact={contacts}
                deleteContact={deleteContact}
                />
            ))}
        </div>
    );
}

export default List
