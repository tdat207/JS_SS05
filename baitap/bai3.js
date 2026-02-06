let bookIds = [];
let bookNames = [];
let inventoryQuantity = [];

let total = Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

let i = 0;
while (i < total) {
    let id;
    do {
        id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    } while (id === "");

    let name;
    do {
        name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    } while (name === "");

    let quantity;
    do {
        quantity = Number(prompt("Nhập số lượng tồn kho hiện tại:"));
    } while (isNaN(quantity) || quantity < 0);

    bookIds.push(id);
    bookNames.push(name);
    inventoryQuantity.push(quantity);

    i++;
}

console.log("Danh sách sách cần xem xét bổ sung (" + bookIds.length + " loại):");

for (let i = 0; i < bookIds.length; i++) {
    console.log(
        (i + 1) +
        ". Mã: " + bookIds[i] +
        " - Tên: " + bookNames[i] +
        " - Còn: " + inventoryQuantity[i] + " bản"
    );
}

let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < 5) {
        lowStockCount++;
    }
}

let outOfStockCodes = "";
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        outOfStockCodes += bookIds[i] + " ";
    }
}

console.log("Số sách có tồn kho < 5 bản:", lowStockCount, "loại");
console.log("Các mã sách đã hết hàng (0 bản):", outOfStockCodes);
