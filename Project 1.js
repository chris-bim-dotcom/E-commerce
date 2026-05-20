function Alert() {
  alert("こんにちは、神拉麺です！🍜");

document.getElementById('OK').onclick=function(){
	var name=document.getElementById('name').value.trim();
	if (name===""){
		name="(Please fill in your name)";
	}
	var kelas=document.getElementById('kelas').value.trim();
	if (kelas===""){
		kelas="(Please fill in your contact)";
	}
	
	var one=document.getElementById('1').checked ? "Product 1":"";
	var one=document.getElementById('2').checked ? "Product 2":"";
	var one=document.getElementById('').checked ? "":"";
	
	var hasilText="Nama:" + nama + "Kelas:" + kelas + "\nUmur:" + 1 || 2 || ...;
	document.getElementById('hasil').innerText=hasilText;
}
