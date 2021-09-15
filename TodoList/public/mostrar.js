function ler(){
  for(cont = 1; cont <= localStorage.cont; cont++){
    lista = localStorage.getItem('desc_'+cont);
    document.getElementById("cads").innerHTML += "Descrição: "+  lista.split(";")[0] + "<br>"+ " Data limite: "+ lista.split(";")[1]+ "<br>"+" Data de criação: "+ lista.split(";")[2]+"<br>"+" Status: Incompleto"+ "<br> <br>";
   //Bom é provisorio esse Status de incompleto rsrs.
  }
}