import findWords from "./findWords";



describe('findWords', () => {
    it('findWord correctly return the rearranged words', () => {
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
    
        for(let i=0; i<testCases.length; i++) {
            const res = findWords(testCases[i].inputWord, testCases[i].dictionary);
    
            expect(res).toEqual(testCases[i].expectedOutput);
        }
    });

    it('findWord correctly returns for one word dict', () => {
        const res = findWords('good', ['go']);

        expect(res).toEqual(['go']);
    });

    it('findWord correctly returns for repeated word dict', () => {
        const res = findWords('good', ['go', 'od', 'od']);

        expect(res).toEqual(['go', 'od', 'od']);
    });

    it('findWord correctly returns for no match in the dict', () => {
        const res = findWords('good', ['qwe', 'dfsdfs', 'sdfr']);

        expect(res).toEqual([]);
    });

    it('findWord correctly returns for some character match in the dict', () => {
        const res = findWords('good', ['goe', 'goon', 'oood']);

        expect(res).toEqual([]);
    });
});