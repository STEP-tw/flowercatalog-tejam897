const blink = function(){
  let GIF = document.getElementById('waterJar');
  GIF.style.display = 'none';
  setTimeout(displayGIF,1000);
}

const displayGIF = function(){
  let gif = document.getElementById('waterJar');
  gif.style.display = 'block'
}
