let cardList = [];
let nameList = [];
let bookList = [];
let lateDayList = [];

let total = parseInt(prompt("Nhập số bạn đọc bị quá hạn hôm nay:"));

for (let i = 0; i < total; i++) {
    let cardCode;
    do {
        cardCode = prompt("Nhập mã thẻ bạn đọc thứ " + (i + 1));
        if (cardCode === "" || cardList.indexOf(cardCode) !== -1) {
            alert("Mã thẻ không hợp lệ hoặc đã tồn tại");
        }
    } while (cardCode === "" || cardList.indexOf(cardCode) !== -1);
    cardList.push(cardCode);

    let fullName;
    do {
        fullName = prompt("Nhập tên bạn đọc cho thẻ " + cardCode);
        if (fullName === "") {
            alert("Tên không được để trống");
        }
    } while (fullName === "");
    nameList.push(fullName);

    let borrowCodes = prompt("Nhập mã sách đang mượn (phân cách bằng dấu phẩy)");
    bookList.push(borrowCodes);

    let lateDays;
    do {
        lateDays = parseInt(prompt("Nhập số ngày quá hạn của " + fullName));
        if (isNaN(lateDays) || lateDays < 0) {
            alert("Số ngày phải >= 0");
        }
    } while (isNaN(lateDays) || lateDays < 0);
    lateDayList.push(lateDays);
}
