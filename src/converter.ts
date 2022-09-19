let conversion: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

const converter = (arabicNumber: number): void => {
    var romano = ""
    for (let i  in conversion) {
        while (arabicNumber >= conversion[i]) {
            romano += 1
            arabicNumber -= conversion[i]
        }
    }
    return romano as void
}
export default converter
