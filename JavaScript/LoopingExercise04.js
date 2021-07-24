var validasi = confirm("Apakah anda mau mengulang");
let total = 0;
	while(validasi){
		if(validasi = true){
			total += 1;
			validasi = confirm("Apakah anda mau mengulang");
		}
		if(validasi = false){
			alert("Perulangan sudah dilakukan sebanyak" + total);
			console.log(total);
		}
		
	}