export function screenChange(url){
  setTimeout(screen, 2000);
    function screen(){
      if(url == "home"){
        window.location.href = ("/")
      }else{
        console.log(url)
        window.location.href = (`/pages/${url}`)
      }
    }
}
