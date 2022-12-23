var input = document.createElement('input');
var tarihbtn = document.getElementById('tarihbtn');
var tarihLines = ["İlk Kurulan Türk Beyliği","Saltuklular",
"İlk Hastanenin Kurulduğu beylik","Mengücekliler",
"Yağbasan Medresesinin Bulunduğu Beylik","Danişmentliler",
"El Cezerinin Bulunduğu Beylik","Artuklular",
"Donaınımı Güçlü olan bir Beylik","Çaka Beyliği",
"Türkiye Selçuklunun En Parlak Dönemi","1. Alaaddin Keykubat Dönemi",
"Anadolunun Kapılarını Açan Savaş","Malazgrit Savaşı",
"Türkiye selçuklunun Yıkılışını Başlatan Savaş","Kösedağ Savaşı",
"Türklerin Anadoludaki Yerini Sağlamlaştıran Savaş","Miryekefelon Savaşı",
"İlk Dini İsyandır","Babailer İsyanı"];
document.getElementById('container').append(input);



tarihbtn.addEventListener('mousedown',()=>{
    console.log("press")
    localStorage.setItem("lines",JSON.stringify(tarihLines))
    window.location.assign('game.html');
})

input.type = 'file';
input.accept = '.txt';
var lines;
input.onchange = e =>{
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerevent =>{
        var content = readerevent.target.result;
        lines = content.split('\n');
        for (var line = 0; line < lines.length; line++) {
            console.log(lines[line]);
        }
        localStorage.setItem("lines",JSON.stringify(lines));
        window.location.assign('game.html');
    }
}