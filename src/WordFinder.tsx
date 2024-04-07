import React, { useState } from 'react';

import findWords from "./utils/findWords";
import './WordFinder.css';

const WordFinder = () => {

  const [inputWord, setInputWord] = useState('');
  const [inputDict, setInputDict] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = () => {
    const dictArray = inputDict.split(',');
    const res = findWords(inputWord, dictArray);
    setResult(res.join(', '));
  }

  return (
    <div className="Word-finder">
      <h1>Word Finder</h1>
      <p>Input Word:</p>
      <input
        type="text"
        value={inputWord}
        onChange={(evt) => setInputWord(evt.target.value)}
      />
      <p>Input comma separated Dictionary:</p>
      <input
        type="text"
        value={inputDict}
        onChange={(evt) => setInputDict(evt.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      <h4>{result}</h4>
    </div>
  );
}

export default WordFinder;
