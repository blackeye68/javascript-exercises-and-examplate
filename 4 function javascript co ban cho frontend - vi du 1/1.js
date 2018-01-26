// demo hàm tạo và dính phần tử trong javascript

// tạo 1 thẻ mới
var phantu = document.createElement('h1');

// gắn nội dung cho thẻ đó
phantu.innerHTML = "Đây là nội dung bên trong "; //đến đây là mình có thẻ <h1>Đây là nội dung bên trong</h1>

// lấy phần tử cần đặt vào qua id của phần tử 
var khoito = document.getElementById('caccm');

// gắn nội dung vào web
khoito.appendChild(phantu);
