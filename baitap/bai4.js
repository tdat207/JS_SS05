let bookIds = [];
let bookNames = [];
let bookStatus = [];

let total = Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

for (let i = 0; i < total; i++) {
    let id;
    do {
        id = prompt("Nhập mã sách " + (i + 1) + ":");
    } while (id === "");

    let name;
    do {
        name = prompt("Nhập tên sách " + (i + 1) + ":");
    } while (name === "");

    let choice;
    do {
        choice = Number(prompt(
            "Chọn tình trạng ban đầu:\n" +
            "1. Hỏng nhẹ\n" +
            "2. Hỏng nặng\n" +
            "3. Cần sửa gấp"
        ));
    } while (choice < 1 || choice > 3);

    let statusText = "";
    if (choice === 1) statusText = "Hỏng nhẹ";
    else if (choice === 2) statusText = "Hỏng nặng";
    else statusText = "Cần sửa gấp";

    bookIds.push(id);
    bookNames.push(name);
    bookStatus.push(statusText);
}

console.log("Danh sách hiện tại:");
for (let i = 0; i < bookIds.length; i++) {
    console.log(
        (i + 1) + ". " +
        bookIds[i] + " - " +
        bookNames[i] + " - " +
        bookStatus[i]
    );
}

while (true) {
    let action = Number(prompt(
        "Bạn muốn làm gì?\n" +
        "1. Sửa tình trạng một cuốn sách\n" +
        "2. Loại bỏ (xóa) một cuốn sách\n" +
        "0. Kết thúc và in báo cáo"
    ));

    if (action === 0) break;

    if (action === 1) {
        let findId = prompt("Nhập mã sách cần sửa:");
        let found = false;

        for (let i = 0; i < bookIds.length; i++) {
            if (bookIds[i] === findId) {
                let newChoice;
                do {
                    newChoice = Number(prompt(
                        "Chọn tình trạng mới:\n" +
                        "1. Hỏng nhẹ\n" +
                        "2. Hỏng nặng\n" +
                        "3. Cần sửa gấp\n" +
                        "4. Đã sửa xong\n" +
                        "5. Loại bỏ"
                    ));
                } while (newChoice < 1 || newChoice > 5);

                if (newChoice === 1) bookStatus[i] = "Hỏng nhẹ";
                else if (newChoice === 2) bookStatus[i] = "Hỏng nặng";
                else if (newChoice === 3) bookStatus[i] = "Cần sửa gấp";
                else if (newChoice === 4) bookStatus[i] = "Đã sửa xong";
                else bookStatus[i] = "Loại bỏ";

                found = true;
                break;
            }
        }

        if (!found) alert("Không tìm thấy mã sách");
    }

    if (action === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i = 0; i < bookIds.length; i++) {
            if (bookIds[i] === deleteId) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            bookIds.splice(index, 1);
            bookNames.splice(index, 1);
            bookStatus.splice(index, 1);
            alert("Đã xóa sách");
        } else {
            alert("Không tìm thấy mã sách");
        }
    }

    console.log("Danh sách hiện tại:");
    for (let i = 0; i < bookIds.length; i++) {
        console.log(
            (i + 1) + ". " +
            bookIds[i] + " - " +
            bookNames[i] + " - " +
            bookStatus[i]
        );
    }
}

let fixedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") fixedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("Tổng số sách còn lại:", bookIds.length);
console.log("Số sách đã sửa xong:", fixedCount);
console.log("Số sách bị loại bỏ:", removedCount);

console.log("Danh sách sách còn lại:");
for (let i = 0; i < bookIds.length; i++) {
    console.log(
        (i + 1) + ". " +
        bookIds[i] + " - " +
        bookNames[i] + " - " +
        bookStatus[i]
    );
}
