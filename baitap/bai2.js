let books = [];
let totalLate = Number(prompt("Có bao nhiêu sách trả muộn hôm nay:"));

let index = 0;
while (index < totalLate) {
    let name = prompt("Nhập tên sách trả muộn " + (index + 1));
    books[books.length] = name;
    index++;
}

console.log("Tổng số sách trả muộn:", totalLate);
console.log("Danh sách sách trả muộn:");

for (let i = 0; i < books.length; i++) {
    console.log((i + 1) + ". " + books[i]);
}

let longNameCount = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].length > 20) {
        longNameCount = longNameCount + 1;
    }
}

console.log("Số sách có tên dài hơn 20 ký tự:", longNameCount);
