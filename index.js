// bai1
function giaiPhuongTrinhBacNhat(a, b) {
    if (+a === 0) {
        if (+b === 0) {
            return "Phuong trinh co vo so nghiem";
        } else {
            return "Phuong trinh la vo nghiem";
        }
    } else {
        return -(+b) / (+a);
    }
}

console.log("Bai 1 la: " + giaiPhuongTrinhBacNhat(5, 8) + "<br>");






// bai 2
arrk = [1, 2, 3, 4, 5, 6]

function timViTriTrongMang(arrk, x) {
    let count = 0;
    for (let i = 0; i < arrk.length; i++) {
        if (arrk[i] === x) {
            count += 1;
            return "Chu so " + x + " o vi tri thu " + i + " trong mang."
        }
    }
    if (count === 0) {
        return "Chu so khong ton tai";
    }
}

console.log("Ket qua: " + timViTriTrongMang(arrk, 1) + "<br>");





//bai 3
let soKiemTra = prompt("Nhap ky tu can kiem tra");
let arrb = soKiemTra.split("");

function demNguyenAm(soKiemtra) {
    let count = 0;
    for (let i = 0; i < soKiemTra.length; i++) {
        if (soKiemTra[i] === "a" || soKiemTra[i] === "u" || soKiemTra[i] === "e" || soKiemTra[i] === "o" || soKiemTra[i] === "i") {
            count += 1;
        }
    }
    if (count === 0) {
        return "Khong co chu nguyen am trong chuoi";
    }
    return "Chu nguyen am trong chuoi la: " + count;
}

console.log("Bai 3 la: " + demNguyenAm(arrb) + "<br>");






// bai 4
class Animal{
    name
    weight
    constructor(name,weight) {
        this.name = name
        this.weight = weight
    }
    setName(name){
        this.name =name
    }
    setWeight(weight){
        this.weight = weight
    }
    getName(){
        return this.name
    }
    getWeight(){
        return this.weight
    }
    toString() {
        return this.getName().toString() + " co can nang la: " + this.getWeight().toString() + "<br>";
    }

}
let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
let result = objAnimal1.toString();
console.log(result);
let objAnimal2 = new Animal("Mickey",1);
objAnimal2.setName("Mouse");
let c = objAnimal2.getName();
console.log(c +' la ten duoc thay the ');

