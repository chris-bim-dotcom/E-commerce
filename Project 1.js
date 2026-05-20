function Alert() {
  alert("こんにちは、神拉麺です！🍜");

document.getElementById('OK').onclick=function(){
	var nama=document.getElementById('nama').value.trim();
	if (nama===""){
		nama="(Nama harus diisi)";
	}
	var kelas=document.getElementById('kelas').value.trim();
	if (kelas===""){
		kelas="(Kelas harus diisi)";
	}
	
	var one=document.getElementById('one').checked ? "10-12":"";
	var one=document.getElementById('two').checked ? "13-15":"";
	var one=document.getElementById('three').checked ? "16-17":"";
	
	var gender="";
	var radios=document.getElementByName('gender');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
			gender=radios[i].value;
		    break;
		}
	}
	if (gender===""){
		gender="(Mohon masukkan jenis kelamin)";
	}
	
	var grade="";
	var radios=document.getElementByName('grade');
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
			grade=radios[i].value;
		    break;
		}
	}
	if (grade===""){
		grade="(Mohon masukkan tingkatan sekolah)";
	}
	
	var hasilText="Nama:" + nama + "Kelas:" + kelas + "\nUmur:" + one || two || three ;
	document.getElementById('hasil').innerText=hasilText;
}
