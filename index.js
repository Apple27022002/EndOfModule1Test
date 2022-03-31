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

document.write("Câu 1: " + giaiPhuongTrinhBacNhat(5, 8) + "<br>");






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

document.write("Câu 2: " + timViTriTrongMang(arrk, 1) + "<br>");







//bai 3
let soKiemTra = prompt("Nhap ky tu can kiem tra");
let arrb = inp.split("");

function demNguyenAm(soKiemtra) {
    let count = 0;
    for (let i = 0; i < soKiemTra.length; i++) {
        if (soKiemTra[i] === "a" || soKiemTra[i] === "u" || soKiemTra[i] === "e" || soKiemTra[i] === "o" || soKiemTra[i] === "i") {
            count += 1;
        }
    }
    if (count === 0) {
        return false;
    }
    return "So nguyen am trong chuoi la: " + count;
}

document.write("Câu 3: " + demNguyenAm(arrb) + "<br>");






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
document.write(result);
let objAnimal2 = new Animal("Cat",1);
objAnimal2.setName("Mouse");
let c = objAnimal2.getName();
document.write(c);
