import { Container, Content, Row} from "./styles";

import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handlerClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
    }
    const handlerAddNumber = (num) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }

    const handlerSumNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('+')
        }else {
          const sum = Number(firstNumber) + Number(currentNumber);
          setCurrentNumber(String(sum))
          setOperation('')
        }
    }

    const handlerMinusNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        }else {
          const minus = Number(firstNumber) - Number(currentNumber);
          setCurrentNumber(String(minus))
          setOperation('')
        }
    }

    const handlerMultNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('x')
        }else {
          const multiplication = Number(firstNumber) * Number(currentNumber);
          setCurrentNumber(String(multiplication))
          setOperation('')
        }
    }

    const handlerDivNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
        }else {
          const multiplication = (Number(firstNumber) / 100) * Number(currentNumber);
          setCurrentNumber(String(multiplication))
          setOperation('')
        }
    }

    const handlerPercNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('%')
        }else {
          const multiplication = (Number(firstNumber) * Number(currentNumber)) / 100;
          setCurrentNumber(String(multiplication))
          setOperation('')
        }
    }

    const handlerPoteNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('x^')
        }else {
          const multiplication = Number(firstNumber) ** Number(currentNumber);
          setCurrentNumber(String(multiplication))
          setOperation('')
        }
    }

    const handlerEquals = () => {
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
            switch(operation){
                case '+':
                    handlerSumNumbers();
                    break;
                case '-':
                    handlerMinusNumbers();
                    break;
                case 'x':
                    handlerMultNumbers();
                    break;
                case '/':
                    handlerDivNumbers();
                    break;
                case '%':
                    handlerPercNumbers();
                    break;
                case 'x^':
                    handlerPoteNumbers();
                    break;
                default: 
                    break;
            }
        }
    }

    return (
        <Container>
            <Content>
                <Input value={currentNumber}/>
                <Row>
                    <Button label="C" onClick={() => handlerClear()}/>
                    <Button label="%" onClick={handlerPercNumbers}/>
                    <Button label="x^" onClick={handlerPoteNumbers}/>
                    <Button label="/" onClick={handlerDivNumbers}/>
                </Row>
                <Row>
                    <Button label="7" onClick={() => handlerAddNumber('7')}/>
                    <Button label="8" onClick={() => handlerAddNumber('8')}/>
                    <Button label="9" onClick={() => handlerAddNumber('9')}/>
                    <Button label="x" onClick={handlerMultNumbers}/>
                </Row>
                <Row>
                    <Button label="4" onClick={() => handlerAddNumber('4')}/>
                    <Button label="5" onClick={() => handlerAddNumber('5')}/>
                    <Button label="6" onClick={() => handlerAddNumber('6')}/>
                    <Button label="-" onClick={handlerMinusNumbers}/>
                </Row>
                <Row>
                    <Button label="1" onClick={() => handlerAddNumber('1')}/>
                    <Button label="2" onClick={() => handlerAddNumber('2')}/>
                    <Button label="3" onClick={() => handlerAddNumber('3')}/>
                    <Button label="+" onClick={handlerSumNumbers}/>
                </Row>
                <Row>
                    <Button label="0" onClick={() => handlerAddNumber('0')}/>
                    <Button label="," onClick={() => handlerAddNumber('.')}/>
                    <Button label="_"/>
                    <Button label="=" onClick={handlerEquals}/>
                </Row>
            </Content>
        </Container>
    )
}

export default App;