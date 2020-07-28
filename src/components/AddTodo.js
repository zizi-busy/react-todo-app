import React,{Component} from 'react'

class AddTodo extends Component{
    state = { content:''}

    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{

        e.preventDefault();
         this.props.addTodo(this.state); //prop from  App
         console.log(this.state)
         //empty input after submit
         this.setState ({
             content: ''
         })
  
     } 

    render (){ 
        return (
            <div >
            <form onSubmit = {this.handleSubmit}>
                <input placeholder="New Todo" type="text" onChange={this.handleChange} value= {this.state.content} / >     
                <button className="waves-effect waves-light pink btn-small bm-3">Submit</button>    
            </form>
         </div> 

    )
}
}
export default AddTodo