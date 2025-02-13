


import "./index.css"
const TodoItems = (props) => {
    const {itemdetails, ondeleteitem} = props
    const {title,id} = itemdetails
  
    const onClickdeleteitem = () => {
        console.log("🛠 Deleting item with ID:", id);  // Debugging log
        ondeleteitem(id)
    }
        return (
        <>
       <ul className="ul-container">
            <li className="list-container">{title}</li>
            <button className="button-delete" onClick={onClickdeleteitem}>Delete item</button>
        </ul>
        
       
        
        </>
    )
}
export default TodoItems