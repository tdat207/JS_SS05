let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let totalReaders = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

for (let i = 0; i < totalReaders; i++) {
    let cardId;
    do {
        cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
    } while (cardId === "" || readerCardIds.indexOf(cardId) !== -1);
    readerCardIds.push(cardId);

    let name;
    do {
        name = prompt(`Nhập tên bạn đọc cho mã ${cardId}:`);
    } while (name === "");
    readerNames.push(name);

    let bookCodes = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    borrowedBookCodes.push(bookCodes);

    let days;
    do {
        days = parseInt(prompt("Nhập số ngày quá hạn:"));
    } while (isNaN(days) || days < 0);
    overdueDays.push(days);
}

console.log(`Danh sách bạn đọc quá hạn (${totalReaders} người):`);
for (let i = 0; i < totalReaders; i++) {
    console.log(
        `${i + 1}. Mã thẻ: ${readerCardIds[i]} | Tên: ${readerNames[i]} | Sách: ${borrowedBookCodes[i]} | Quá hạn: ${overdueDays[i]} ngày`
    );
}

let countOver10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) countOver10++;
}
console.log("Tổng số bạn đọc quá hạn ≥ 10 ngày:", countOver10);

let result = [];
for (let i = 0; i < borrowedBookCodes.length; i++) {
    if (borrowedBookCodes[i].indexOf("JS") !== -1 && borrowedBookCodes[i].indexOf("PYT") !== -1) {
        result.push(readerCardIds[i]);
    }
}
console.log("Các bạn đọc đang mượn cả sách JS và PYT:", result.join(", "));

let maxDay = overdueDays[0];
let maxIndex = 0;
for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > maxDay) {
        maxDay = overdueDays[i];
        maxIndex = i;
    }
}
console.log(`Bạn đọc có số ngày quá hạn cao nhất: ${readerNames[maxIndex]} (${maxDay} ngày)`);

let warningCount = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) warningCount++;
}

if (warningCount === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (warningCount <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
