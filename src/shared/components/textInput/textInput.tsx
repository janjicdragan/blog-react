import React, { useState } from 'react';
import styles from './TextInput.module.css';
import { SharedProps } from '../../../domain/posts/types/interfaces';

interface InputProps extends SharedProps {
  onInputChange: (value: string) => void;
  onClearBtnClick: () => void;
  placeholder?: string;
}

const TextInput = ({
  onInputChange,
  onClearBtnClick,
  placeholder,
  helloMessage,
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

  console.log(`${helloMessage} ${TextInput.name}`);
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
