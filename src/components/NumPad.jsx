import { useState } from 'react';
import styles from '../styles/NumPad.module.css';

const PAD_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

const NumPad = () => {
  const [inputValue, setInputValue] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onNumOptionClick = (numOption) => {
    setInputValue(inputValue + numOption);
  };

  const onSubmitClick = () => {
    if (inputValue.length) {
      setSubmissions([...submissions, inputValue]);
      setInputValue('');
    }
  };

  const onSubmitEntryClick = (submissionEntry, submissionIndex) => {
    setInputValue(submissionEntry);
    const submissionsCopy = [...submissions];
    submissionsCopy.splice(submissionIndex, 1);
    setSubmissions(submissionsCopy);
  };

  return (
    <div className={styles.container}>
      <div className={styles['grid-container']}>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          className={styles['text-input']}
        />
        {PAD_OPTIONS.map((padOption) => (
          <button
            type="button"
            key={`pad-option-${padOption}`}
            onClick={() => onNumOptionClick(padOption)}
          >
            {padOption}
          </button>
        ))}
        <button
          type="button"
          className={styles['submit-button']}
          onClick={onSubmitClick}
        >
          Submit
        </button>
      </div>
      <div className={styles.submissions}>
        {submissions.map((submission, index) => (
          <p
            key={`submission-${onInputChange}-${index}`}
            onClick={() => onSubmitEntryClick(submission, index)}
          >
            {submission}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NumPad;
