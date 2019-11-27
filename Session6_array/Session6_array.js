let danhSachten = ["a",12,"ahihi",":))"];
// danhSachten[5]=5;
// danhSachten.splice(2,3);
// console.log(danhSachten);
// console.log(danhSachten[4]);
let count=0;
let array=[10,25,23,24,25,26];
// let sum=0,tb=0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     sum+=element;
// }
// console.log("Tổng giá trị của mảng là: "+sum);
// tb = sum/array.length;
// console.log("Giá trị trung bình là: " + tb);
// console.log("Dãy nhỏ hơn số tb là: ");
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element<tb) console.log(element);
// }
// let n = parseInt(prompt("nhập vào số n "));
// console.log("************************");

// for (let i = 0; i < array.length; i++) {
//     if(array[i]===n) {
//         console.log(array[i]);
//         count = 1;
//     }    
// }
// if (count===0) console.log("Không có giá trị nào ");
// ***********************************************
// let a = parseInt(prompt("them vao so thu 1"));
// let b = parseInt(prompt("them vao so thu 2"));
// let arr2='';
// array.push(a,b);
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     arr2 += element + " ";
// }
// console.log(arr2);

// let sum=0,tb=0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     sum+=element;
// }
// console.log(sum);
// let min=array[0];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(min < array[i]) min=array[i];
// }
// console.log("Min="+min);
// let max=array[0];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(max > array[i]) max=array[i];
// }
// console.log("Max ="+ max);

///////////////////// Sắp xếp 1 mảng

let name = ["NTL","NVM","NMH","HTH"];
let name1 = prompt("What's ur name???");
name.push(name1);
for(let i=0;i<name.length;i++)
{
    console.log(`${i+1}: ${name[i]}`);
}
// console.log(name);
let stt = parseInt(prompt("Số thứ của tên tự cần sửa "));
name[stt] = prompt("Tên bạn cần sửa là: ");
console.log("Mảng sau khi sửa:");
for(let i=0;i<name.length;i++)
{
    console.log(`${i+1}: ${name[i]}`);
}
stt = parseInt(prompt("Số thứ tự của tên  cần xóa là:"));
name.splice(stt-1,1);
console.log("Mảng sau khi xóa là: ");

for(let i=0;i<name.length;i++)
{
    console.log(`${i+1}: ${name[i]}`);
}