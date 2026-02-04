let bookId = [];
let bookName = [];
let bookState = [];

let total = Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra hôm nay"));

for (let i = 0; i < total; i++) {
    let id = prompt("Nhập mã sách " + (i + 1));
    let name = prompt("Nhập tên sách " + (i + 1));

    let status;
    do {
        status = Number(prompt(
            "Chọn tình trạng:\n" +
            "1. Hỏng nhẹ\n" +
            "2. Hỏng nặng\n" +
            "3. Cần sửa gấp"
        ));
    } while (status < 1 || status > 3);

    let textStatus = "";
    if (status === 1) textStatus = "Hỏng nhẹ";
    else if (status === 2) textStatus = "Hỏng nặng";
    else textStatus = "Cần sửa gấp";

    bookId[i] = id;
    bookName[i] = name;
    bookState[i] = textStatus;
}

console.log("Danh sách hiện tại:");
for (let i = 0; i < bookId.length; i++) {
    console.log((i + 1) + ". " + bookId[i] + " - " + bookName[i] + " - " + bookState[i]);
}

while (true) {
    let menu = Number(prompt(
        "Chọn chức năng:\n" +
        "1. Sửa tình trạng sách\n" +
        "2. Xóa sách\n" +
        "0. Kết thúc"
    ));

    if (menu === 0) break;

    if (menu === 1) {
        let findId = prompt("Nhập mã sách cần sửa");
        let found = false;

        for (let i = 0; i < bookId.length; i++) {
            if (bookId[i] === findId) {
                let newStatus;
                do {
                    newStatus = Number(prompt(
                        "Tình trạng mới:\n" +
                        "1. Hỏng nhẹ\n" +
                        "2. Hỏng nặng\n" +
                        "3. Cần sửa gấp\n" +
                        "4. Đã sửa xong\n" +
                        "5. Loại bỏ"
                    ));
                } while (newStatus < 1 || newStatus > 5);

                if (newStatus === 1) bookState[i] = "Hỏng nhẹ";
                else if (newStatus === 2) bookState[i] = "Hỏng nặng";
                else if (newStatus === 3) bookState[i] = "Cần sửa gấp";
                else if (newStatus === 4) bookState[i] = "Đã sửa xong";
                else bookState[i] = "Loại bỏ";

                found = true;
                break;
            }
        }

        if (!found) alert("Không tìm thấy mã sách");
    }

    if (menu === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa");
        let pos = -1;

        for (let i = 0; i < bookId.length; i++) {
            if (bookId[i] === deleteId) {
                pos = i;
                break;
            }
        }

        if (pos !== -1) {
            bookId.splice(pos, 1);
            bookName.splice(pos, 1);
            bookState.splice(pos, 1);
            alert("Đã xóa sách");
        } else {
            alert("Không tìm thấy mã sách");
        }
    }

    console.log("Danh sách hiện tại:");
    for (let i = 0; i < bookId.length; i++) {
        console.log((i + 1) + ". " + bookId[i] + " - " + bookName[i] + " - " + bookState[i]);
    }
}

let fixed = 0;
let removed = 0;

for (let i = 0; i < bookState.length; i++) {
    if (bookState[i] === "Đã sửa xong") fixed++;
    if (bookState[i] === "Loại bỏ") removed++;
}

console.log("Tổng số sách còn lại:", bookId.length);
console.log("Số sách đã sửa xong:", fixed);
console.log("Số sách bị loại bỏ:", removed);
