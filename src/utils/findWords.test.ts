import findWords from "./findWords";

const testCases = [
    {
        inputWord: 'ate',
        dictionary: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
        expectedOutput: ["ate", "eat", "tea"]
    },
    {
        inputWord: 'oogd',
        dictionary: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
        expectedOutput: ["dog", "do", "god", "goo", "go", "good"]
    },
];

test('findWord correctly return the rearranged words', () => {
    
    for(let i=0; i<testCases.length; i++) {
        const res = findWords(testCases[i].inputWord, testCases[i].dictionary);

        expect(res).toEqual(testCases[i].expectedOutput);
    }
    
  });