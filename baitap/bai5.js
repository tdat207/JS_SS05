let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần nhập?"));

for (let i = 0; i < n; i++) {
    let id;
    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`);
        if (id === "" || booksId.indexOf(id) !== -1) {
            alert("Mã sách không được để trống và phải là duy nhất!");
        }
    } while (id === "" || booksId.indexOf(id) !== -1);
    booksId.push(id);

    let name;
    do {
        name = prompt(`Nhập tên sách cho mã ${id}:`);
        if (name === "") {
            alert("Tên sách không được để trống!");
        }
    } while (name === "");
    booksName.push(name);

    let category = prompt(`Nhập thể loại sách ${name} (cách nhau bằng dấu phẩy):`);
    booksCategory.push(category);

    let quantity;
    do {
        quantity = parseInt(prompt(`Nhập số lượng tồn kho của ${name}:`));
        if (isNaN(quantity) || quantity < 0) {
            alert("Số lượng phải là số >= 0");
        }
    } while (isNaN(quantity) || quantity < 0);
    inventoryQuantity.push(quantity);
}
