import React,{Component} from 'react';
import classes from './Contact.module.scss';
import Loader from '../Loader/Loader'

export default class Contact extends Component{
  state={
    data:{
       name:null,
      'email':null,
      'message':null
    },
    successMessage:false,
    errMessage:false,
    loading:false
  }
  nameChangeHandler=(e)=>{
    const regEx=/^[a-z\s?\-?]+$/gi;
    if(e.target.value!==null){
      if(regEx.test(e.target.value)){
        let getValue=e.target.value;
        let upgradeName={...this.state.data};
        upgradeName['name']=getValue;
        this.setState({data:upgradeName});
        e.target.className=classes.validInput;
      }else{
        let upgradeName={...this.state.data};
        upgradeName['name']=null;
        this.setState({data:upgradeName});
        e.target.className=classes.invalidInput;
      }
    }
    e.preventDefault();
  }
  emailChangeHandler=(e)=>{
    const regEx=/^([\w\.?\-?]+)@([[a-z]+)(\.[a-z]{2,8})(\.[a-z]{2,8})?$/gi;
    if(e.target.value!==null){
     
    if(regEx.test(e.target.value)){
      let getValue=e.target.value;
      let upgradeEmail={...this.state.data};
      upgradeEmail['email']=getValue;
      this.setState({data:upgradeEmail});
      e.target.className=classes.validInput;
    }else{

        let upgradeEmail={...this.state.data};
        upgradeEmail['email']=null;
        this.setState({data:upgradeEmail});
       e.target.className=classes.invalidInput;
    }
    }

    e.preventDefault();
  }

  messageChangeHandler=(e)=>{
    const regEx=/.+/gi;
    
    if(e.target.value!==null){
    if(regEx.test(e.target.value)){
      let getValue=e.target.value;
      let upgradeMessage={...this.state.data};
      upgradeMessage['message']=getValue;
      this.setState({data:upgradeMessage});
      e.target.className=classes.validMessage;
    }else{
   
      let upgradeMessage={...this.state.data};
      upgradeMessage['address']=null;
      this.setState({data:upgradeMessage});
      e.target.className=classes.invalidMessage;

    }
  }
  }
  handleSubmit=(e)=>{
    const {name,email,message}=this.state.data;
    console.log()
    if(name && email && message){
      this.setState({errMessage:false})
      this.setState({loading:true});
      fetch(`https://admin-testing-burger-project.firebaseio.com/messages.json`, {
        method: 'POST',
        mode: "cors",
        body:JSON.stringify(this.state.data)
      }).then(()=>{
        this.setState({loading:false})
        this.setState({successMessage:true})
      }).catch(()=>{
        console.log('err')
      })
    }else{
      this.setState({errMessage:true})
    }
    e.preventDefault()
  }
  render(){
    const loading=this.state.loading;
    return(
         !loading ?
          <div className={classes.row}>
          <h1 style={{textAlign:'center'}} className={classes.title}>Let me know your project.I'm excited to hear it.</h1>
          <div className={classes.contactContainer}>
            
            <div className={classes.nameField}>
              <label className={classes.label} >Name</label>
              <input className={classes.name} type="text"onChange={this.nameChangeHandler} />
            </div>
            <div className={classes.emailField}>
              <label className={classes.label} >Email</label>
              <input className={classes.email}  type="text" onChange={this.emailChangeHandler}/>
            </div>
      
            <div className={classes.messageField}>
              <label className={classes.label} >Describe your project</label>
              <textarea type="text" className={classes.message} onChange={this.messageChangeHandler}/>
            </div>
            <button className={classes.submitBtn} onClick={this.handleSubmit}>Submit</button>
          </div>
          {
            <h3 style={{textAlign:"center",color:'green',transition:'all .3s',opacity:this.state.successMessage?1:0}}>Your message is successfully sent</h3>
          }
          {
            <h3 style={{textAlign:"center",color:'red',transition:'all .3s',opacity:this.state.errMessage?1:0,marginTop:'-5rem'}}>Please fill in all fields</h3>
          }
        </div>
      :<div style={{height:'100vh'}}><Loader /></div>
    )
  }
}
 