function Item({order, index, contact, deleteContact}){
    return(
        <div>
            {order}.{contact.name}, {contact.email}
       

        <button onClick={()=>deleteContact(index)}>
            Delete
        </button>
         </div>
    );
}


export default Item;