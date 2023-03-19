 const mostrar = document.createElement('button')
 mostrar.type='button'
 mostrar.innerHTML ='Mostrar Tinta'
 mostrar.id = 'mostraElementos'
 mostrar.dataset= 'data-mostrar'
 document.querySelector('body').appendChild(mostrar)

 const apagar = document.createElement('button')
 apagar.type='button'
 apagar.innerHTML ='Apagar Tinta'
 apagar.id = 'apagarElementos'
 apagar.setAttribute= ('data-apagar', '')
 document.querySelector('body').appendChild(apagar)

 const botaoApagar = document.querySelector('#apagarElementos')
 const cores =document.querySelector('[data-lista]')
 const botaoMostra = document.querySelector('#mostraElementos')

botaoApagar.addEventListener('click', ()=>{
cores.setAttribute('data-lista','esconder')
console.log()
})
 
botaoMostra.addEventListener('click', mostrando)

function mostrando(){
    cores.setAttribute('data-lista', 'mostrar')
}