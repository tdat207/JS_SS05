let bookList = [];
let total = prompt("Nhập số sách trả hôm nay:");

for (let i = 1; i <= total; i++) {
    let bookName = prompt("Tên sách thứ " + i + ":");
    bookList[bookList.length] = bookName;
}

console.log("Số sách đã trả là:", total);
console.log("Các sách đã trả:");

for (let i = 0; i < bookList.length; i++) {
    console.log(i + 1 + " - " + bookList[i]);
}

