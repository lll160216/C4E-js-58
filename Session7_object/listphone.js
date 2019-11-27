let listphone = [
    { 
        '1.Model' : "Iphone X",
        '2.brand' : "Apple",
        '3.price' : 32e6,
    },
    { 
        '1.Model' : "Samsung Galaxy a7",
        '2.brand' : "SAMSUNG",
        '3.price' : 4.09e6,
    },
    { 
        '1.Model' : "F5 Youth",
        '2.brand' : "OPPO",
        '3.price' : 3e6,
    },
];
console.log(`DANH SÁCH ĐIỆN THOẠI`);
console.log('Stt || Thông tin sản phẩm');

for (let i = 0; i < listphone.length; i++) {
    const phone = listphone[i];
    console.log(`${i+1}   -----------------`);
    for (const key in listphone[i]) {
        if (phone.hasOwnProperty(key)) {
            const value = phone[key];
            console.log(`    ||   ${key} : ${value}`);
        }
    console.log(`    =========================`);
    }
}

// Thêm một điện thoại mới
let addPhone = {};
for (const key in listphone[1]) {
        let New = prompt(`Nhập ${key} `);
        addPhone[key] = New;
    }
listphone.push(addPhone);
for (let i = 0; i < listphone.length; i++) {
    const phone = listphone[i];
    console.log(`${i+1}`);
    for (const key in listphone[i]) {
        if (phone.hasOwnProperty(key)) {
            const value = phone[key];
            console.log(`||   ${key} : ${value}`);
        }
    console.log(`=============================`);
    }
//Tìm kiếm tên điện thoại
}
let searchPhone = prompt("Nhập tên điện thoại bạn muốn tìm kiếm");
let count = 0;
console.log("  ==== Kết quả tìm kiếm ====");

for (let i = 0; i < listphone.length; i++) {
    const namePhone = listphone[i];
    if(namePhone.Model.toLowerCase().includes(searchPhone.toLowerCase()))
    {
        console.log(namePhone);
        count ++;
    }
}
console.log(`Có ${count} kết quả tìm kiếm cho từ khóa "${searchPhone}"`);

//tìm 1 từ khóa trong tên xong sửa 1 key
/*
let editPhone = prompt("Nhập tên điện thoại bạn muốn sửa");
for (let i = 0; i < listphone.length; i++) {
    const name = listphone[i];
    if(name.Model.toLowerCase().includes(editPhone.toLowerCase())){
        let edit = prompt("Bạn muốn sửa key gì???");
        for (const key in name) {
            if(key.toLowerCase().includes(edit.toLowerCase())){
                    let newValue = prompt(`Nhập ${key} mới`);
                    name[key] = newValue;
            }
            else alert("Không có key phù hợp");
        }
     else alert("Không có tên phù hợp");
    }
}*/
//Sửa số thứ tự
let editPhone = prompt("Nhập thứ tự đt cần sửa");
for (let i = 0; i < listphone.length; i++) {
    const name = listphone[i];//truy cập từng object
    if(i===editPhone-1){//thứ tự điện thoại cần sửa
        let edit = prompt("Bạn muốn sửa key gì???");
        for (const key in name) {
            if(key.toLowerCase()===edit.toLowerCase()){
                    let newValue = prompt(`Nhập ${key} mới`);
                    name[key] = newValue;
            }
            else("Không có key phù hợp");
        }
    }
}
//In lại danh sách
console.log(`DANH SÁCH ĐIỆN THOẠI SAU KHI SỬA:`);
for (let i = 0; i < listphone.length; i++) {
    const phone = listphone[i];
    console.log(`${i+1}`);
    for (const key in listphone[i]) {
        if (phone.hasOwnProperty(key)) {
            const value = phone[key];
            console.log(`||   ${key} : ${value}`);
        }
    console.log(`=============================`);
    }
}