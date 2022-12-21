var input = document.createElement('input');

document.body.append(input)

input.type = 'file';
input.accept = '.txt';

input.onchange = e =>{
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerevent =>{
        var content = readerevent.target.result;
        var lines = content.split('\n');
        for (var line = 0; line < lines.length; line++) {
            console.log(lines[line]);
          }
    }
}