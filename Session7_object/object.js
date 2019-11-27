// let myInfor ={
//     "Name" : "Long",
//     'Age' : 20,
//     favorite : ['no'],
// }
// console.log(myInfor.Name);
// console.log(myInfor["Name"]);
// myInfor.school="PTIT";
// myInfor.Age="19";
// delete myInfor.Name;
// console.log(myInfor);
// for (const key in myInfor ){
//         const element = myInfor[key];
//         console.log(key + " " + element);
        
//     }

// baif tap
// Khởi tạo 1 object Person rỗng
// cho người dùng nhập vào 3 key và value
// in lại ra màn hình theo cú pháp key : value

// 2.Sửa, cho người nhập nhập vào key cần sửa 
// Kiểm tra nneeus key đúng thì cho nhập giá trị mới vào update
// In lại Person ra màn hình
// Ngược lại báo không tồn tại key

// 3.Xóa, cho nhập key, xóa key tương ứng nếu tồn tại
// Không có thông báo khppng tồn tại key

// 4.Trong các trường hợp nhập key nghĩ cách để cho người dùng nhập đến khi nào đúng

// let Person = {};
// let key;
// let value;
// for (let i = 0; i < 3; i++) {
//     key = prompt (`Nhập key${i+1} `);
//     value = prompt(`Nhập value${i+1}`);
//     Person[key]=value;
// }
// for (const key in Person) {
//         const value = Person[key];
//     console.log(`${key}:${value}`);
    
//  }
//  console.log("EDITKEY");
//  let keyEdit = prompt ("Nhap key can sua");
//  while(!Person.hasOwnProperty(keyEdit))
// {
//     keyEdit = prompt ('Nhap lai key');
// }

// if(Person.hasOwnProperty(keyEdit)){
//     let newValue = prompt("Nhap value moi");
//     Person[keyEdit] = newValue;
// }
// for (const key in Person) {
//         const value = Person[key];
//         console.log(`${key}:${value}`);        
//     }
// let keyExisted = prompt ('Nhap key');
// while(!Person.hasOwnProperty(keyExisted))
// {
//     keyExisted = prompt ('Nhap lai key');
// }
// console.log("nhap dung key");

// SHOP
let listphone = [
    {
        name : "iphone X",
        price : 20e6,
        brand: 'Apple',
    },
    {
        name : "Samsung galaxy note 10+",
        price : 28.99e10,
        brand: 'Samsung',
    },
    {
        name : "F11",
        price : 3e6,
        brand: "Oppo",
    },
]
for (let i = 0; i < listphone.length; i++) {
    const phone = listphone[i];
    console.log(`${i+1}`);
    
   for (const key in phone) {
       const value = phone[key];
       console.log(`${key} : ${value}`);
       }
 }
//  let inName = prompt("Nhap ten dien thoai can tim");
//  phone
