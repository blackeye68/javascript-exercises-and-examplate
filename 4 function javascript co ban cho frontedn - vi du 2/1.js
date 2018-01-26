// demo template string
var mangdl = [
{
	anh:"http://kenh14cdn.com/zoom/280_175/2018/photo1516094796401-1516094796401.jpg",
	ten:"quai vat",
	noidungcm:"Những bộ phim hoạt hình tốn kém hàng triệu USD bây giờ có thể quay bằng camera iPhone X"
},

{
	anh:"http://kenh14cdn.com/zoom/280_175/2018/photo1516117537814-1516117537815.jpg",
	ten:"mu dep",
	noidungcm:"Kỳ Duyên khoe loạt hàng hiệu Gucci mới sắm, đắt nhất là chiếc áo khoác hơn 50 triệu"
}

];
// console.log(mangdl[0]['noidungcm']);

for (var i = 0; i < mangdl.length; i++) {
	console.log(mangdl[i].ten);
}