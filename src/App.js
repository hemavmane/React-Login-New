import {Component} from "react"

export class App extends Component{
        constructor(props){
          super(props)
          this.state={
            id:"alkdklnfdlskf",
            userName:"",
            password:""
          }
        }

       handleusername=(event)=>{
        this.setState({
          userName:event.target.value
        })
       }
        
       handlepassword=(event)=>{
        this.setState({
          password:event.target.value.trim()
          
        })
       }

       handelesubmit=()=>{
        if(this.state.password.length>=8){
          alert("Login succesfully")
        }else{
          alert("Invalid Password")
        }
       this.setState({
        password:"",
        userName:""

       })
       }

        render(){
          return(
            <div>
            <label htmlFor="user">UserName:</label>
            <input onChange={this.handleusername} value={this.state.userName}/>
            <label htmlFor="user">Password:</label>
            <input onChange={this.handlepassword} value={this.state.password}/>
            <button onClick={this.handelesubmit}>Submit</button>
            </div>
          )
        }
}

