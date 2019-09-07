import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component{
   
   constructor(props){
      super(props);
      this._onChange=this.onChange.bind(this);
      
      this.storeList =[         
         "Store1",
         "Store2"
   ];
   this.serviceError="hello this is error";
   
   this.state={
      suggestions:[],
      text:'',
    
}
            
      }

   
   onChange(event){
      
   console.log("serviceError::"+this.serviceError);
   console.log("NAME::"+this.props.name);
   console.log("you entered::"+event.target.value);
   let enteredvalue = event.target.value;
   let suggestions=[];
   if(enteredvalue.length>0){
      const regex = new RegExp(`^${enteredvalue}`,'i');
      
      
      console.log("you enteredvalue regex::"+regex);
     suggestions=this.storeList.sort().filter(v=>(regex.test(v)));
     console.log("you suggestions regex::"+suggestions);
   }
  this.setState(()=>({suggestions,text:enteredvalue}));
   }
   suggestionsSelected(enteredvalue){
      this.setState(()=>({         
         text:enteredvalue,
         suggestions:[],
        
      }))

   }
   renderSuggestions(){
      const {suggestions}=this.state;
      if(suggestions.length===0){
         return null;
      }
      return(
      <ul>
         {suggestions.map((stre)=><li onClick={()=>this.suggestionsSelected(stre)}>{stre}</li>)}
      </ul>
      );
   }
   
   
   render(){
      const {text} = this.state;
      console.log('text::'+this.state.suggestions)
      console.log('text2::'+this.state.text)
      return(
         <div>
            <h1>Search..</h1>
            <input onChange={this._onChange} type ="text" value={this.state.text}/>
         {this.renderSuggestions()}
         </div>
         
      );
   }
}
Search.propTypes = {
   name: PropTypes.string
 };
 Search.defaultProps = {
   name: 'Stranger'
 };
export default Search;