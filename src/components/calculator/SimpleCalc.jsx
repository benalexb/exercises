import { useEffect, useState } from 'react';
import NumKey from './NumKey';
import InputDisplay from './InputDisplay';
import styles from '../../styles/calculator/SimpleCalc.module.css';

const ROW_1 = [
  { type: 'action', command: 'clear', face: 'AC' },
  { type: 'action', command: 'invert', face: '+/-' },
  { type: 'action', command: 'percent', face: '%' },
  { type: 'operation', value: '/', face: '÷' },
];

const ROW_2 = [
  { type: 'number', value: '7', face: '7' },
  { type: 'number', value: '8', face: '8' },
  { type: 'number', value: '9', face: '9' },
  { type: 'operation', value: '*', face: 'x' },
];

const ROW_3 = [
  { type: 'number', value: '4', face: '4' },
  { type: 'number', value: '5', face: '5' },
  { type: 'number', value: '6', face: '6' },
  { type: 'operation', value: '-', face: '-' },
];

const ROW_4 = [
  { type: 'number', value: '1', face: '1' },
  { type: 'number', value: '2', face: '2' },
  { type: 'number', value: '3', face: '3' },
  { type: 'operation', value: '+', face: '+' },
];

const ROW_5 = [
  { type: 'number', value: '0', face: '0' },
  { type: 'delimiter', value: '.', face: ',' },
  { type: 'action', command: 'result', face: '=' },
];

const ROWS = [
  ...ROW_1,
  ...ROW_2,
  ...ROW_3,
  ...ROW_4,
  ...ROW_5,
];

const isOperator = (char) => ['+', '-', '/'].includes(char);

const handleAction = (key, displayValue, setDisplayValue, fullInput, setFullInput) => {
  if (key.command === 'clear') {
    setDisplayValue('0');
    setFullInput('');
  }

  if (key.command === 'result') {
    // eslint-disable-next-line no-eval
    setDisplayValue(`${eval(fullInput)}`);
    setFullInput('');
  }
};

const handleOperation = (key, displayValue, setDisplayValue, fullInput, setFullInput) => {
  // Check if the last entry in the full input is an operator. Operators cannot be consecutive.
  if (key.value !== '=' && !isOperator(fullInput[fullInput.length - 1])) {
    setFullInput(fullInput + key.value);
  }
};

const handleNumber = (key, displayValue, setDisplayValue, fullInput, setFullInput) => {
  const { value } = key;

  if (displayValue[0] === '0' && value !== 0) {
    setDisplayValue(value);
    setFullInput(value);
  }

  if (displayValue[0] !== '0') {
    setDisplayValue(displayValue + value);
    setFullInput(fullInput + value);
  }
};

const handleDelimiter = (key) => {
  console.log('Called handleDelimiter() with key', key); // bbarreto_debug
};

const Controller = {
  action: handleAction,
  operation: handleOperation,
  number: handleNumber,
  delimiter: handleDelimiter,
};

const SimpleCalc = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [fullInput, setFullInput] = useState('');

  const handleNumKeyPress = (key) => {
    Controller[key.type](key, displayValue, setDisplayValue, fullInput, setFullInput);
  };

  // bbarreto_debug
  useEffect(() => {
    console.log('fullInput', fullInput);
  }, [fullInput]);

  return (
    <div className={styles['calc-container']}>
      <InputDisplay className={styles.display} value={displayValue} />
      <div className={styles['num-pad']}>
        {ROWS.map((key) => {
          const { type, command, value, face } = key;
          const variant = type === 'action' && command === 'result' ? 'result' : 'default';
          return (
            <NumKey
              key={value || face}
              variant={variant}
              onClick={() => handleNumKeyPress(key)}
            >
              {face}
            </NumKey>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleCalc;
