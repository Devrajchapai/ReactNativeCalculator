import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Ui = () => {

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0); 

    const handleNumberPress =  (buttonValue:string)=>{
        setFirstNumber(firstNumber + buttonValue);
    };

    const handleOperationPress = (operationValue:string)=>{
        setOperation(operationValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    };

    const calculateResult = ()=>{
        switch(operation){
            case '+':
                setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
                break;
            
            case '-':
                setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
                break;
            
            case '/':
                setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
                break;

            case '*':
                setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
                break;  

            case '%':
                setResult((parseFloat(secondNumber)/parseFloat(firstNumber))*100);
                break;    
             
            default:
                clear();
                setResult(0);
                break;
        }

    }

    const clear = ()=>{
        setFirstNumber('');
        setSecondNumber('');
        setOperation(' ');
        setResult(0);
    }

  return (
    <View style={uiStyle.container}>
        <View style={uiStyle.textContainer}>
            <Text style={uiStyle.inputArea}> {secondNumber} {operation} {firstNumber} </Text>
            <Text style={uiStyle.resultArea}>{result}</Text>
        </View>    
        <TouchableOpacity style={uiStyle.backSpaceContainer} onPress={()=>{setFirstNumber(firstNumber.slice(0,-1))}}>
                <Text style={uiStyle.backSpaceButton}>DEL</Text>
            </TouchableOpacity> 
        <View style={uiStyle.backSpaceContainer}>


        </View>
        

        <View style={uiStyle.buttonContainer}>
            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleOperationPress('/')}}>
                <Text>/</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleOperationPress('%')}}>
                <Text>%</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={uiStyle.inputButtons} disabled>
                <Text>( )</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={clear}>
                <Text>clear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleOperationPress('*')}}>
                <Text>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('9')}}>
                <Text>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('8')}}>
                <Text>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('7')}}>
                <Text>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleOperationPress('-')}}>
                <Text>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('6')}}>
                <Text>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('5')}}>
                <Text>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('4')}}>
                <Text>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleOperationPress('+')}}>
                <Text>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('3')}}>
                <Text>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('2')}}>
                <Text>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('1')}}>
                <Text>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={calculateResult}>
                <Text>=</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('.')}}>
                <Text>.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} onPress={()=>{handleNumberPress('0')}}>
                <Text>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={uiStyle.inputButtons} disabled>
                <Text>empty</Text>
            </TouchableOpacity>
        </View>


    </View>
  )
}

export default Ui

const uiStyle = StyleSheet.create({
    container:{
        margin: 0,
        padding: 0,
        borderRadius: '8%',
    },
    
    textContainer:{
        marginTop: "1%",
        marginBottom: "1%",
        paddingTop: "1%",

    },
    
    inputArea:{
        paddingTop: "2%",
        paddingBottom: "2%",
        paddingRight: "5%",
        width: '100%',
        height: 'auto',
        maxHeight: '83%',
        fontSize: 50,
        textAlign: 'right',
        overflow: 'scroll',
    },
    
    resultArea:{
        marginTop: 5,
        paddingTop: "2%",
        paddingBottom: 5,
        paddingRight: "5%",
        color: 'blue',
        fontWeight: 'bold',
        width: "100%",
        height: 40,
        textAlign: 'right',
        fontSize: 20,  
        overflow: 'hidden',
    },

    backSpaceContainer:{
        position: 'absolute',
        marginTop: '93%',
        marginLeft: '2%',
        padding: 5,
    },

    backSpaceButton:{
        marginLeft: '16%',
        padding: 0,
        color: 'red',
        fontWeight: '900', 
        fontSize: 20,  
    },

    buttonContainer:{
        marginTop: '100%',
        marginBottom: '0%',
        padding: '0%',
        position: 'absolute',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        height: 'auto',
        width: '100%',
        borderRadius: '10%',
    },

    inputButtons:{
        margin: 5,
        padding: '5%',
        width: '22%',
        height: '20%',
        borderRadius: '50%',
        fontWeight: '500',
    },

});