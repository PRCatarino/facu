export function screenChange(url){
  setTimeout(screen, 2000);

  function screen (){
    window.location.href = url;
  }
}