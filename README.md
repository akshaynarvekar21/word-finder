# Word finder App

Approach for the probem:
    1. For the input word, construct a charater frequency array for all the characters in it.
    2. For each word in the dictionary, clone the charater frequency array in step 1 and decrement each character in the dictionary owrd.
    3. If the character frquency becomes negative at any point that means the input word does not have the required number of characters to reconstruct this dictionary word.
    4. If the character frequency is not negative for any character in the dictionary word, it means it is valid and add it to the result array.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Further imporvements

Caching can implemented for repeated words.
