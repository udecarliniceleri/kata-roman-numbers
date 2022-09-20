const ROMAN_TABLE: any = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100:"C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

const converter = (arabicNumber: number): string => {
    //el resultado es un string vacio porque aca cargamos la data final
 let result : string = "";
 //tomo la key del object y la invertimos para que vaya buscando el numero de mayor a menor y vaya bajando en caso de no cumplir
 const ROMAN_TABLE_KEY = Object.keys(ROMAN_TABLE).reverse();
//entra la key para recorrer el for each
 ROMAN_TABLE_KEY.forEach(value => {
    //pasa la key a un number pqe llega en string
    const key = Number(value);
    //cuando nuestro numero arabico sea mayor igual que la key
    while (arabicNumber >= key) {
        //al numero arabico le restamos la key
        arabicNumber -= key;
        //el resultado es el valor de la key que se encuentra en la tabla romana
        result += ROMAN_TABLE[key];
    }
 })
 return result
};
export default converter;

/* 
while(arabicNumber > 0){
    if(arabicNumber >= 40){
        result = result + ROMAN_TABLE[40]
    }
} */

