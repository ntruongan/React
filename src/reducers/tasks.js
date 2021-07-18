

import * as keys from './../constants/KeyCodes'

var initialState = 
	{
		phoneNumber : '',
		count : 0,
		isValid : true
	};

var myReducers = (state = initialState, action) => {
	if (state.isValid && state.count < 10){
		switch(action.code){
			case keys.ONE:
				state.phoneNumber = state.phoneNumber + keys.ONE;
				state.count = state.count + 1;
				console.log(state);
				return state;
			case keys.TWO:
				state.phoneNumber = state.phoneNumber + keys.TWO;
				state.count = state.count + 1;
				return state;
			case keys.THREE:
				state.phoneNumber = state.phoneNumber + keys.THREE;
				state.count = state.count + 1;
				return state;
			case keys.FOUR:
				state.phoneNumber = state.phoneNumber + keys.FOUR;
				state.count = state.count + 1;
				return state;
			case keys.FIVE:
				state.phoneNumber = state.phoneNumber + keys.FIVE;
				state.count = state.count + 1;
				return state;
			case keys.SIX:
				state.phoneNumber = state.phoneNumber + keys.SIX;
				state.count = state.count + 1;
				return state;
			case keys.SEVEN:
				state.phoneNumber = state.phoneNumber + keys.SEVEN;
				state.count = state.count + 1;
				return state;
			case keys.EIGHT:
				state.phoneNumber = state.phoneNumber + keys.EIGHT;
				state.count = state.count + 1;
				return state;
			case keys.NINE:
				state.phoneNumber = state.phoneNumber + keys.NINE;
				state.count = state.count + 1;
				return state;
			case keys.ZERO:
				state.phoneNumber = state.phoneNumber + keys.ZERO;
				state.count = state.count + 1;
				return state;
			case keys.ASTERISK:
				state.phoneNumber = state.phoneNumber + keys.ASTERISK;
				state.count = state.count + 1;
				return state;
			case keys.HASH:
				state.phoneNumber = state.phoneNumber + keys.HASH;
				state.count = state.count + 1;
				return state;
			case keys.DELETE:
				var chars = state.phoneNumber;
				if(chars.length>0){
      				state.phoneNumber = chars.slice(0, -1);
    			}
				//state.phoneNumber = state.phoneNumber + keys.ZERO;
				state.count = state.count - 1;
				return state;
			default:
				return state;
		}
	}
	else if (action.code == keys.DELETE){

		var chars = state.phoneNumber;
		if(chars.length>0){
				state.phoneNumber = chars.slice(0, -1);
		}
		//state.phoneNumber = state.phoneNumber + keys.ZERO;
		state.count = state.count - 1;
		return state;
	}

	return state;

}

export default myReducers;