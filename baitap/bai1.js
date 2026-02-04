let numberBook = [];
let bookCount = Number(prompt("Bạn muốn trả bao nhiêu sách:"));

for (let i = 0; i < bookCount; i++) {
    let newBook = prompt("Nhập tên cuốn sách " + (i + 1) + ":");
    numberBook.push(newBook);
    alert("Thêm sách thành công!");
}

console.log("Tổng số sách đã được trả:", numberBook.length);
console.log("Danh sách đã trả:");

for (let i = 0; i < numberBook.length; i++) {
    console.log((i + 1) + ". " + numberBook[i]);
}
