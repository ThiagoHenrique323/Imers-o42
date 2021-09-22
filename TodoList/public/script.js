const input = document.querySelector('input')
const lista = document.querySelector('ul')
const buttonElement = document.querySelector('button')
const dat = document.getElementById("dat")

const todos = JSON.parse(localStorage.getItem('lista')) || []

//Deve ser iniciado com Live Server
function mostrarLista(){
  lista.innerHTML = ''
 
  for(item of todos){
 
    const pos = todos.indexOf(item)

    const itemList =  document.createElement('li')
    
    const itemText = document.createTextNode(item)
    
    itemList.setAttribute('class', `A${pos}`)
    const link = document.createElement('a')

    
    const linkText =  document.createTextNode('Apagar')
     link.appendChild(linkText)

    
    link.setAttribute('onclick', `removeTodo(${pos})`)  

    itemList.appendChild(itemText)
    itemList.appendChild(link)
   
    lista.appendChild(itemList)
    

  }
  
}

 function addTodo(){
   const todo = input.value
  const da =  dat.value
  const st = 'Incompleto'
  date = new Date().toLocaleDateString();
   todoss={todo:todo,da:da,st:st,date:date}

  todos.push(JSON.stringify(todoss))
   input.value = ''
  mostrarLista()
  salvar()
  console.log(JSON.stringify(todos))
 }
 
 function removeTodo(pos){
    todos.splice(pos, 1)
   mostrarLista()
    salvar()
 }

 function salvar(){
   localStorage.setItem('lista', JSON.stringify(todos))
 }