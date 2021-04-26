describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("Guitar")).toBeTruthy();
      expect(stringCheck("Guitar is good")).toBeTruthy();
      expect(stringCheck(false)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(1.5)).toBeTruthy();
      expect(numberCheck(5+5)).toBeTruthy();
      expect(numberCheck("Guitar")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(7===7)).toBeTruthy();
      expect(booleanCheck(6>89)).toBeTruthy();
      expect(booleanCheck(34343434343)).toBeFalsy();
    });
  });
  
  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }