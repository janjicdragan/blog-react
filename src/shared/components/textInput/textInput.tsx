import React, { useState } from 'react';
import styles from './textInput.module.css'; // Import CSS module

interface InputProps {
  onInputChange: (value: string) => void;
  onClearBtnClick: () => void;
  placeholder?: string;
}

const TextInput = ({
  onInputChange,
  onClearBtnClick,
  placeholder,
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  const handleClearBtnClick = () => {
    onClearBtnClick();
    setInputValue('');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.input}
        placeholder={placeholder}
      />
      <button onClick={handleClearBtnClick}>Restart</button>
    </div>
  );
};

export default TextInput;
