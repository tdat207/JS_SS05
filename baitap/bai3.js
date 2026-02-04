let bookCodeList = [];
let bookNameList = [];
let stockList = [];

let totalType = Number(prompt("Hôm nay có bao nhiêu loại sách cần kiểm tra:"));

let i = 0;
while (i < totalType) {
    let code = prompt("Nhập mã sách " + (i + 1));
    let name = prompt("Nhập tên sách " + (i + 1));
    let stock = Number(prompt("Nhập số lượng tồn kho"));

    bookCodeList[i] = code;
    bookNameList[i] = name;
    stockList[i] = stock;

    i++;
}

console.log("Danh sách cần xem xét bổ sung:", totalType, "loại");

for (let i = 0; i < bookCodeList.length; i++) {
    console.log(
        (i + 1) +
        ". Mã: " + bookCodeList[i] +
        " - Tên: " + bookNameList[i] +
        " - Còn: " + stockList[i] + " bản"
    );
}

let lowStockCount = 0;
for (let i = 0; i < stockList.length; i++) {
    if (stockList[i] <= 5) {
        lowStockCount++;
    }
}

let emptyStock = "";
for (let i = 0; i < stockList.length; i++) {
    if (stockList[i] === 0) {
        emptyStock += bookCodeList[i] + " ";
    }
}

console.log("Số sách có tồn kho ≤ 5 bản:", lowStockCount, "loại");
console.log("Các mã sách đã hết hàng:", emptyStock);
