import React, {Component} from 'react';
import { connect } from 'react-redux'
import Keys from './keys'
import * as keys_const from './../constants/KeyCodes'
import { keyPressed } from './../actions/index'

class Dial extends Component{

  onDel=()=>{
    console.log('delete');
    this.props.onDelele(keys_const.DELETE);
    console.log(this.props.myStates);
    document.getElementById("telNumber").value = this.props.myStates["phoneNumber"];
/*    var chars = document.getElementById("telNumber").value;
    if(chars.length>0){
      document.getElementById("telNumber").value = chars.slice(0, -1);
    }
    else{
      console.log('min length')
    }*/
    
  }

  render(){
    //console.log(this.props.myStates)
    var keys = [
          {
            id : 1,
            code : keys_const.ONE,
            char : ''
          },
          {
            id : 2,
            code : keys_const.TWO,
            char : 'ABC'
          },
          {
            id : 3,
            code : keys_const.THREE,
            char : 'DEF'
          },
          {
            id : 4,
            code : keys_const.FOUR,
            char : 'GHI'
          },
          {
            id : 5,
            code : keys_const.FIVE,
            char : 'JKL'
          },
          {
            id : 6,
            code : keys_const.SIX,
            char : 'MNO'
          },
          {
            id : 7,
            code : keys_const.SEVEN,
            char : 'PQRS'
          },
          {
            id : 8,
            code : keys_const.EIGHT,
            char : 'TUV'
          },
          {
            id : 9,
            code : keys_const.NINE,
            char : 'WXYZ'
          },
          {
            id : 10,
            code : keys_const.ASTERISK,
            char : ''
          },
          {
            id : 11,
            code : keys_const.ZERO,
            char : 'ABC'
          },
          {
            id : 12,
            code : keys_const.HASH,
            char : ''
          }
    ];
    let elements = keys.map((keys, index) => {
        let result = '';
        result =  <Keys code = {keys.code} char = {keys.char}></Keys>;
        return result;

    });

    return(
      <div class="container">
          <div class="row">
              <div class="col-md-4 col-md-offset-4 phone">
                  <div class="row1">
                    <div class = "row">
                        <div class = "col">
                            <input type="tel" name="name" id="telNumber" class="form-control tel" value="" />
                        </div>
                        <div class = "col-md-12">
                            <button type="button" class="btn btn-danger" onClick = { this.onDel }>X</button>
                        </div>
                    </div>
                      <div class="col-md-12">
                        <div class="num-pad">
                          { elements }
                        </div>
                        <div class="clearfix"></div>
                        <a href="#" class="btn btn-success btn-block flatbtn">CALL</a>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return { 
    myStates : state.phoneNumber
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelele : (keyCode) => {
      dispatch(keyPressed(keyCode));
    } 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dial);
