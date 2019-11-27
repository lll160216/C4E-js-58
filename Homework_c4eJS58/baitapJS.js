// // let cauhoiten = prompt (" ban ten la gi ");
// // console.log("chao " + cauhoiten);
// // let chieudai = prompt("Chieu dai HCN là ");
// // let chieurong = prompt ("Chieu rong HCN la ");
// // console.log("chu vi HCN la "+(chieudai*2 + chieurong*2));
// // console.log("dien tich HCN la "+ (chieudai*chieurong));

// // fibonaci thứ n
// // let n,sum=1,s1,s2;
// // n = parseInt(prompt("Nhập số n từ bàn phím: "));
// // for (let i=1;i<=n;i++)
// // {

// //     sum +=j;
// // }
// // alert(`số fibonaci thứ ${n} là ${sum}`);
// //  vẽ hình @@@@@@@@@@@@@@@
// // let dai,rong;
// // dai = parseInt(prompt("Nhập chiều dài "));
// // rong = parseInt(prompt("Nhập chiều rộng "));
// // for (let a=1;a<=dai;a++)
// // {
// //     for(let b=1;b<=rong;b++)
// //     {
// //         console.log("* ");
// //     }
// //     console.log(`/r`);
    
// // }
// // /@@@@@@@@@@@@@@@@@@@@@@ FIBONACI
// let n,sum=0;
// n = parseInt(prompt("Nhap n "));
// let a1=1,a2=1,f=0;
// if (n===1 ||n===2) alert();
// let i = 3;
// while (i<=n)
// {
//   f = a1 + a2;
//   // 1 1 2 3 5 8 13 21 
//   a1 = a2;
//   a2 = f;
//   i++ ;
//   sum +=f+2;
// }
// if(f!=0) {
//     alert(`so fibonaci thu ${n} la ${f}`);
//     alert (`tong ${n} so Fibonaci dau tien la ${sum}`);
// }



// Bài tập về nhà buổi mảng 1 chiều
// let name = ["Nguyen Van A", "Nguyen Thi B", "Tran Van C", "Le Van D","Nguyen Van A","Nguyen Van A"];
// for (let i = 0; i < name.length; i++) {
//   const element = name[i];
//   console.log(`${i+1}. ${element}`);
// }
let letName = prompt("Nhập tên cần tìm: ");
let isExist=0;
for (let i = 0; i < name.length; i++) {
  const element = name[i];
  if (element.toLowerCase().includes(letName.toLowerCase)) isExist = 1;
}
if (isExist===1) console.log("Tên có trong mảng ");
else console.log("Tên không có trong mảng ");
console.log("Tất cả các tên có trong dãy là: ");
for (let i = 0; i < name.length; i++) {
  const element = name[i];
  if (element.toLowerCase().includes(letName.toLowerCase()) console.log(`${i+1}. ${element}`);
}
// let name = ["Nguyen Van A", "Nguyen Thi B", "Tran Van C", "Le Van D","Nguyen Van A","Nguyen Van A"];
// let name1 = [];
// for (let i = 0; i < name.length; i++) {
//   for (let j = 0; j < array.length-i-1; j++) {
//     if()
    
//   }
  
// }






// Sắp xếp các số theo hứ tự từ bé đến lớn
// console.log("sau sx");

// let number = [1,5,6,4,7,8,9,77,85,64,632,56,46,54,16,56];
// let temp;
// for (let i = 0; i < number.length-1; i++) {
//   for (let j = 0; j < number.length-i-1; j++) {
//     if(number[i]>number[j+1])
//     {
//       temp = number[i];
//       number[i] = number[j+1];
//       number[j+1] = temp;
//     }
//   }
// }
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
// console.log(element);

// }