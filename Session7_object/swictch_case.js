let listphone = [
    { 
        Model : "Iphone X",
        Brand : "Apple",
        Price : 32e6,
    },
    { 
        Model: "Samsung Galaxy a7",
        Brand : "SAMSUNG",
        Price : 4.09e6,
    },
    { 
        Model : "F5 Youth",
        Brand : "OPPO",
        Price : 3e6,
    },
];
//in danh sách
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

let inputNumber = prompt(`Vui lòng nhập số trước thao tác \n 1.Thêm 1 điện thoại mới. \n 2.Tìm kiếm 1 điện thoại theo tên. \n 3.Sửa một điện thoại theo số thứ tự trong danh sách. `);
// while(inputNumber<0 && inputNumber>4)
// {
//     inputNumber = prompt(`Bạn vừa nhập sai thao tác. Vui lòng nhập lại \n 1.Thêm 1 điện thoại mới. \n 2.Tìm kiếm 1 điện thoại theo tên. \n 3.Sửa một điện thoại theo số thứ tự trong danh sách. `);
// }
switch(inputNumber){
    case '1':
        // Thêm một điện thoại mới
        let addPhone = {};
        for (const key in listphone[1]) {
                let New = prompt(`Mời bạn nhập ${key} mới`);
                addPhone[key] = New;
            }
        listphone.push(addPhone);
        for (let i = 0; i < listphone.length; i++) {
            const phone = listphone[i];
            console.log(`${i+1}`);
            for (const key in listphone[i]) {
                if (phone.hasOwnProperty(key)) {
                    const value = phone[key];
                    console.log(`    ||   ${key} : ${value}`);
                }
            console.log(`    =========================`);
            }

        }
    break;
    case '2':
        //Tìm kiếm tên điện thoại
        let searchPhone = prompt("Nhập tên điện thoại bạn muốn tìm kiếm");
        let count = 0;
        console.log("  ==== Kết quả tìm kiếm ====");

        for (let i = 0; i < listphone.length; i++) {
            const namePhone = listphone[i];
            if(namePhone.Model.toLowerCase().includes(searchPhone.toLowerCase())){
                        console.log(namePhone);
                        count ++;
            }    
        }
        console.log(`Có ${count} kết quả tìm kiếm cho từ khóa "${searchPhone}"`);
    break;
    case '3':
        let editPhone = prompt("Nhập thứ tự đt cần sửa");
        for (let i = 0; i < listphone.length; i++) {
            const name = listphone[i];//truy cập từng object
            if(i===editPhone-1){//thứ tự điện thoại cần sửa
                let editKey = prompt("Bạn muốn sửa key gì???");
                for (const key in name) {
                    if(key.toLowerCase()===editKey.toLowerCase()){
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
    break;
}