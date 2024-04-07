
const findWords = (inputWord: string, inputDict: string[]): string[] => {
    // Create a character frequency array of all the characters in the inputWord
    /* Create an array inputWordCharFreq
    of length 26 for all alphabet characters(a-z)
    and initial default frequency for each character set to 0. */
    const inputWordCharFreq = Array(26).fill(0);

    // Loop through inputWord for each character
    for(let i=0; i<inputWord.length; i++) {
        // Calculate the index of each char by ascii code minus 97(ASCII code of a).
        const charIndex = inputWord[i].charCodeAt(0) - 97;
        // Increment the charcater freq in the frequency array
        inputWordCharFreq[charIndex]++;
    }

    // Store the rearranged words from the dictionaryin the result array
    const result = [];

    // Loop through the inputDict array
    for(let i=0; i<inputDict.length; i++) {
        /* Clone the Input word character frequecy array
        since we want to reuse the original array for each word in the dict.*/
        const clonedInputWordCharFreq = inputWordCharFreq.slice();
        // Check if the current is valid or invalid
        let isValidWord = true;
        // Loop through each charater of the dict
        for(let j=0; j<inputDict[i].length; j++) {
            // Calculate the index of each char by ascii code minus 97(ASCII code of a).
            const charIndex = inputDict[i][j].charCodeAt(0) - 97;
            // Decrement the charater from the cloned freq array.
            clonedInputWordCharFreq[charIndex]--;
            /* If the frequqncy of the character is less than zero,
            it means the input does word does not have the character*/
            if(clonedInputWordCharFreq[charIndex] < 0) {
                // set the word to invalid
                isValidWord=false;
                // stop checking further characters in the word
                break;
            }
        }
        // If the word is valid, add it to the result array
        if(isValidWord) {
            result.push(inputDict[i]);
        }
    }
    return result;
};

export default findWords;