import converter from "./converter"
describe("Converter", () => {
    test("should return I for 1", () => {
        console.log(converter(1))
        expect(converter(1)).toBe("I")
    })
    test("should return V for 5", () => {
        expect(converter(5)).toBe("V")
    })
    test("should return X for 10", () => {
        expect(converter(10)).toBe("X")
    })
    test("should return L for 50", () => {
        expect(converter(50)).toBe("L")
    })
    test("should return C for 100", () => {
        expect(converter(100)).toBe("C")
    })
    test("should return D for 500", () => {
        expect(converter(500)).toBe("D")
    })
    test("should return M for 1000", () => {
        expect(converter(1000)).toBe("M")
    })
    test("should return IV for 4", () => {
        expect(converter(4)).toBe("IV")
    })
    test("should return IX for 9", () => {
        expect(converter(9)).toBe("IX")
    })
    test("should return XL for 40", () => {
        expect(converter(40)).toBe("XL")
    })
    test("should return XC for 90", () => {
        expect(converter(90)).toBe("XC")
    })
    test("should return CD for 400", () => {
        expect(converter(400)).toBe("CD")
    })
    test("should return CM for 900", () => {
        expect(converter(900)).toBe("CM")
    })
    test("should return III for 3", () => {
        expect(converter(3)).toBe("III")
    })
    test("should return VIII for 8", () => {
        expect(converter(8)).toBe("VIII")
    })
    test("should return XXX for 30", () => {
        expect(converter(30)).toBe("XXX")
    })
    test("should return LXXX for 80", () => {
        expect(converter(80)).toBe("LXXX")
    })
    test("should return CCC for 300", () => {
        expect(converter(300)).toBe("CCC")
    })
    test("should return DCCC for 800", () => {
        expect(converter(800)).toBe("DCCC")
    })
    test("should return MMM for 3000", () => {
        expect(converter(3000)).toBe("MMM")
    })
    test("should return MMMCMXCIX for 3999", () => {
        expect(converter(3999)).toBe("MMMCMXCIX")
    })
    test("should return CCCXCIX for 399", () => {
        expect(converter(399)).toBe("CCCXCIX")
    })
    test("should return CCCLI for 351", () => {
        expect(converter(351)).toBe("CCCLI")
    })
    test("should return MCCXCIX for 1299", () => {
        expect(converter(1299)).toBe("MCCXCIX")
    })
    test("should return MDCCXXI for 1721", () => {
        expect(converter(1721)).toBe("MDCCXXI")
    })
    test("should return MI for 1001", () => {
        expect(converter(1001)).toBe("MI")
    })
    test("should return CDLXXIX for 479", () => {
        expect(converter(479)).toBe("CDLXXIX")
    })
    test("should return MCMXCIX for 1999", () => {
        expect(converter(1999)).toBe("MCMXCIX")
    })
    test("should return MMMDCCCLVIII for 3858", () => {
        expect(converter(3858)).toBe("MMMDCCCLVIII")
    })
    test("should return NONE for 0", () => {
        expect(converter(0)).toBe("NONE")
    })
    test("should return XI for 11", () => {
        expect(converter(11)).toBe("XI")
    })
})
