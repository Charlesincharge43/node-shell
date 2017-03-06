process.stdout.write('prompt > ');

function commands(data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd==='pwd'){
    console.log(process.cwd());
  }
  else if(cmd==='date'){
    var datetime=new Date();
    console.log(datetime);
  }
  else if(cmd==='ls'){
    ls();
  }

}

function ls(){
  var fs=require('fs');
  var output=fs.readdir('.', function(err, files) {//files in '.' passed into the function
    if (err) throw err;
    files.forEach(function(file) {//readdir determines the files
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });

  return output;
}


module.exports={
  commands: commands,
}
