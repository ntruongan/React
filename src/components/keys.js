import React, {Component} from 'react';
import { keyPressed } from './../actions/index'
import { connect } from 'react-redux'


class Keys extends Component{


  onPress=()=>{
  	this.props.onPressKey(this.props.code);
  	console.log(this.props.myState);
    console.log(this.props.code);
    document.getElementById("telNumber").value = this.props.myState["phoneNumber"];
/*    if((document.getElementById("telNumber").value).length<10){
      document.getElementById("telNumber").value += this.props.code;
    }
    else{
      console.log('max length')
    }*/
    
  }



  render(){
  	console.log(this.props.myState);
    return(
			<div class="span4" >
			    <div class="num" onClick = { this.onPress }>
			        <div class="txt" >
			            { this.props.code } 
			            <span class="small">
			                <p>
			                    { this.props.char }
			                </p>
			            </span>
			        </div>
			    </div>
			</div>
      );
  }
}


const mapStateToProps = state => {
  return { 
    myState : state.phoneNumber
  }
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onPressKey : (keyCode) => {
			dispatch(keyPressed(keyCode));
		} 
	}
}


export default connect(mapStateToProps, mapDispatchToProps) (Keys);