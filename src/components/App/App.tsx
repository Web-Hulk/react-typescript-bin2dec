import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string | number>('');
  const [isError, setIsError] = useState<boolean>(false);

  const onlyNumbers = (value: string) => {
    return /^[0-1]+$/.test(value);
  }

  const convertBin2Dec = (str: string) => {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      result = result * 2 + Number(str[i]);
    };
    
    setResult(result);
}

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    convertBin2Dec(value);
    onlyNumbers(value) ? setIsError(false) : setIsError(true);
  }

  return (
    <div>
      <h1>Bin2Dec</h1>

      <p>
        {'Enter a '}
        <a href='https://en.wikipedia.org/wiki/Binary_number'>binary number</a>
        {', get a '} 
        <a href='https://en.wikipedia.org/wiki/Decimal'>decimal conversion.</a>
      </p>

      {(isError && inputValue !== '') && (
        <p style={{ color: 'red' }}>You entered a non-binary digit (please enter only 0 or 1).</p>
      )}

      {(!isError && inputValue !== '') && <p style={{ color: 'green' }}>Here is your decimal!</p>}

      <input 
        type='text'
        value={inputValue}
        onChange={handleInput}
        minLength={1}
        maxLength={20}
        autoFocus
      />

      {(isError || inputValue === '') && <p>🤷Waiting for a valid binary number...</p>}

      <p>{isError ? '' : result}</p>

      <p>Made by <a href='https://github.com/Web-Hulk'>Patryk Kwasek</a></p>
    </div>
  );
}

export default App;
