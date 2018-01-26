// truy xuất đến phần tử


// trước khi truy xuất phải document ready
document.addEventListener("DOMContentLoaded", function(){
	// dùng code
	var nut = document.getElementById('nut1');

	var khoi = document.getElementsByClassName('card');
	// console.log(khoi);
	// gọi sự kiện click
	nut.onclick = function() {
		// console.log('click được chưa ?');
		// khoi[0].classList.add('diphai');
		khoi[0].classList.toggle('diphai');
	}

}, false)
