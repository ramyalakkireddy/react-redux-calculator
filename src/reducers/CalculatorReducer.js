import { INPUT_VALUE, GET_RESULT, CLEAR } from '../actions/CalculatorActions';

const initialState = {
  displayValue: '0',
};

export default function CalculatorReducer(state = initialState , action) {
  switch (action.type) {
    case INPUT_VALUE:
          return{
                ...state,
                displayValue: state.displayValue == 0 ? action.value : state.displayValue + action.value
            }
      break;
    case CLEAR:
        return{
                ...state,
                displayValue: '0'
            }
      break;
    case GET_RESULT:
        return {
                ...state,
                displayValue: calculate(parseInputString(state.displayValue))
            }
      break;
    default:
      return state;
  }
  return state;
}

function parseInputString(s) {
    // Parsing the input string into an array of numbers and operators
    var result = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                result.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        result.push(parseFloat(current));
    }
    return result;
}

 function calculate(result) {
    // applying the operator to the numbers preceeding
    var ops = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (ops[i][result[j]]) {
                currentOp = ops[i][result[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], result[j]);
                currentOp = null;
            } else {
                newCalc.push(result[j]);
            }
            console.log(newCalc);
        }
        result = newCalc;
        newCalc = [];
    }
    if (result.length > 1) {
        console.log('Error: unable to resolve calculation');
        return result;
    } else {
        return result[0];
    }
}