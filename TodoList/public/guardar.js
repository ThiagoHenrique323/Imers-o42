
  function salvar(){

    if(typeof(Storage) != "undefined"){

      if(localStorage.cont){
        localStorage.cont = Number(localStorage.cont)+1;
      }else{
        localStorage.cont = 1;
      }
      date = new Date().toLocaleDateString();
  
      desc = document.getElementById('des').value + ";" +  document.getElementById('dd').value + ";" + date;
  
    localStorage.setItem("desc_"+localStorage.cont, desc)
}else{
  document.write("Sem suporte Web Strorage!")
}

}