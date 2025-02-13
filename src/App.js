
import {Component} from "react"
import { v4 as uuidv4} from 'uuid'
import Loader from "react-js-loader";

import TodoItems from "./components/TodoItems"
import Header from "./components/Header"

import './App.css';

class App extends Component {
  state = {todolist:[],itemname:"",isLoading:true}

  onChangeItem = (event) => {
    this.setState({itemname:event.target.value})
     }
  componentDidMount = async () => {
    
    try{
      const url ="https://todos-db2025backend.onrender.com/todos/"
    const option ={
      method:"GET"

    }
    const response = await fetch(url,option)
    if(response.ok){
      const data = await response.json()
      this.setState({todolist:data,isLoading:false})
      console.log(data)
    }
    else{
      console.log("error in if else block in get method")
    }
    
    }
    catch(e){
      console.log("error in get method catch block")
      
    }
  }

  ondeleteitem = async (id) => {
    try {
        // Validate ID
        if (!id) {
            console.error("Invalid ID provided");
            return;
        }

        // Construct URL
        const url = `https://todos-db2025backend.onrender.com/todos/${id}`;

        // Fetch options
        const options = { method: "DELETE" };

        // Send DELETE request
        const response = await fetch(url, options);

        // Handle non-OK responses
        if (!response.ok) {
            throw new Error(`Failed to delete item. Status: ${response.status}`);
        }

        // Log success
        console.log(` Successfully deleted ID ${id}`);

        // Update state to remove the deleted item
        this.setState((prevState) => ({
            todolist: prevState.todolist.filter(each => each.id !== id),
        }));

        // Optional: Handle response data if needed
        const data = await response.json();
        console.log("Deleted item:", data);

    } catch (error) {
        console.error("Error in delete method:", error.message || error);
    }
};

  
  
  

  


  ///
  onSubmitItem = async (event) => {
    event.preventDefault();
    const { itemname, todolist } = this.state;
  
    if (itemname.trim() === "") {
      console.warn(" Item name is empty. Not adding to list.");
      return;
    }
  
    const additem = { title: itemname };
  
    try {
      const url = "https://todos-db2025backend.onrender.com/todos/";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(additem),
      };
  
      const response = await fetch(url, options);
      const responseText = await response.text(); // Read raw response
  
      console.log("🔍 Raw Response from Backend:", responseText);
  
      if (response.ok) {
        try {
          const data = JSON.parse(responseText); // Try parsing as JSON
          console.log(" Parsed Data:", data);
  
          this.setState({
            todolist: [...todolist, data],
            itemname: "",
          });
        } catch (jsonError) {
          console.warn("Response is not JSON. Fetching updated list.");
          this.setState({ itemname: "" });
          this.componentDidMount(); // Fetch updated list if response is not JSON
          
        }
      } else {
        console.error("Error: Failed to add item. Status:", response.status);
        
      }
    } catch (error) {
      console.error(" Error in POST request:", error);
    }
  };
  
  

  render(){
    const {todolist,statusLoading,itemname,isLoading} = this.state
    return (
      <>
      {isLoading ? (<div>
        <Loader type="spinner-circle"  color="blue" title={"spinner-circle"} size={100} /></div>): (
    <><Header />
    <div className="main-container">
    <form onSubmit={this.onSubmitItem}>
    <input type="text" placeholder="Add items in list" className="input-button" onChange={this.onChangeItem} value={itemname} />
    <button type="onSubmit" className="add-button">Add Item</button>
    </form>
    {todolist.length > 0 ? 
    (
      <>{todolist.map(each => (
    <TodoItems itemdetails={each} key={each.id} ondeleteitem={this.ondeleteitem} />))}
    </>):
    (
    <p>"The list is empty. Please add some items."</p>
    )}
    </div></>
  )}
     
      </>
    )
  }
}


export default App;
