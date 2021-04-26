describe("palindromeTest", ()=>{
    it("should return palindrome", ()=>{
        expect(palindromeChecker("racecar")).toBeTruthy()
        expect(palindromeChecker("level")).toBeTruthy()
      
       })
       it("shouldn't return palindrome", ()=>{
        expect(palindromeChecker("ryan")).toBeFalsy()
        expect(palindromeChecker("waterbottle")).toBeFalsy()
       })
})


function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
  }