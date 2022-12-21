var input = document.createElement('input');

document.body.append(input)

input.type = 'file';
input.accept = '.txt';
var lines;
input.onchange = e =>{
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerevent =>{
        var content = readerevent.target.result;
        lines = content.split('-');
        for (var line = 0; line < lines.length; line++) {
            console.log(lines[line]);
          }
        console.log(lines)
        localStorage.setItem("lines",lines);
    }

}
