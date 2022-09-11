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
    <div className='flex flex-col justify-center items-center text-center bg-black text-white h-screen'>
      <h1 className='text-5xl font-bold'>
        Bin2Dec
      </h1>

      <p className='my-6'>
        {'Enter a '}
        <a 
          href='https://en.wikipedia.org/wiki/Binary_number'
          className='bg-green-500 bg-opacity-20 duration-200 hover:bg-opacity-50'
          target='_blank'
          rel="noreferrer"
        >
          binary number
        </a>
        {', get a '}
        <a 
          href='https://en.wikipedia.org/wiki/Decimal'
          className='bg-green-500 bg-opacity-20 duration-200 hover:bg-opacity-50'
          target='_blank'
          rel="noreferrer"
        >
          decimal
        </a>
        {' conversion.'}

        {(isError && inputValue !== '') && (
          <p className='text-[#e74c3c] font-bold'>
            You entered a non-binary digit (please enter only 0 or 1).
          </p>
        )}

        {(!isError && inputValue !== '') && (
          <p className='text-[#27ae60] font-bold'>
            Here is your decimal!
          </p>
        )}
      </p>

      <div className='w-full'>
        <input 
          type='text'
          value={inputValue}
          onChange={handleInput}
          minLength={1}
          maxLength={20}
          autoFocus
          className='max-w-[80%] py-3 px-4 text-3xl text-white border-[1px] border-white outline-0 bg-transparent'
        />

        {inputValue.length === 20 && (
          <p className='text-xs text-[#999] font-bold'>*Maximum length is 20 digits</p>
        )}
      </div>

      <div className='my-8 leading-6 font-bold'>
        {(isError || inputValue === '') ? (
          <p className='text-[.85rem] text-[#999]'>
            🤷Waiting for a valid binary number...
          </p>
        ) : (
          <p className='text-[2.5rem]'>
            {result}
          </p>
        )}
      </div>

      <p className='absolute bottom-4 text-sm text-[#333]'>
        {'Made by '} 
        <a 
          href='https://github.com/Web-Hulk' 
          className='text-white underline'
          target='_blank'
          rel="noreferrer"
        >
          Patryk Kwasek
        </a>
      </p>
    </div>
  );
}

export default App;
