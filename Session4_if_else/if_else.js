//*************************** */
// Phần PassWord
// let passWord;
// passWord = prompt("Nhập PassWord ");
// // if(passWord.length < 8) alert("Mật khẩu phải lớn hơn 8 kí tự!!!");
// // else alert("Bạn đã nhập đủ thôi chứ chưa đúng nhé");

// **************************
// Phần tháng trong năm
// let month;
// month = parseInt(prompt ("Nhap thang "));
// if(month < 0 || month >12 ) alert ("Nhập tháng sai");
// else {
// if ((month <= 8 && month % 2 === 1 && month !=2)|| (month > 8 && month % 2 === 0)) alert("tháng 31 ngày");
// else if ((month < 7 && month % 2 === 0 && month != 2)||(month > 8 && month % 2 ===1)) alert("tháng 30 ngày");
// else if (month ===2) alert("tháng 28 hoặc 29 ngày");
// }

// ************************************
// Phần Chỉ số BMI
// let weight;
// let height;
// weight = Number(prompt("Cân nặng của bạn là:(kg) "));
// height = Number(prompt("Chiều cao của bạn là:(m) "));
// let BMI = weight/(height*height);
// if (BMI < 18.5) alert("Phân loại:Gầy Nguy cơ phát triển bệnh:Thấp");
// else if (BMI <= 24.9) alert("Phân loại:Trung Bình Nguy cơ phát triển bệnh:Bình Thường ");
// else if (BMI <= 29.9  ) alert("Phân loại:Hơi béo Nguy cơ phát triển bệnh:Cao ");
// else if ( BMI <= 34.9 ) alert("Phân loại:Béo Phì cấp độ 1 Nguy cơ phát triển bệnh:Cao");
// else if (BMI <= 39.9) alert("Phân loại:Béo phì cấp độ 2 Nguy cơ phát triển bệnh:Rất cao");
// else if (BMI >= 40) alert("Phân loại:Béo phì cấp độ 3 Nguy cơ phát triển bệnh:Nguy Hiểm");

// *************************************************
// Cho 1 số có ba chữ số tính tổng các chữ số

// let number;
// number = parseInt(prompt("Nhập số có 3 chữ số: "));
// let tmp,sum;
// sum = number%10;
// number = parseInt(number/10);
// sum += number%10;
// number = parseInt(number/10);
// sum += number%10;
// alert (`Tổng của các chữ số là: ${sum}`);