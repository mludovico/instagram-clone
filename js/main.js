(function(document, window){
  window.setInterval(changeBackground, 4000);
  var backgrounds = [
    'fundo1.jpg',
    'fundo2.jpg',
    'fundo3.jpg',
    'fundo4.jpg',
    'fundo5.jpg',
  ];
  var index = 0;
  function changeBackground(){
    let fundo = document.getElementsByClassName('fundo-phone')[0];
    fundo.src = "/img/"+ backgrounds[index];
    if(index == 4)
      index = 0;
    else
      index = index + 1;
  }
})(document, window);
