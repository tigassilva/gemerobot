   // exercicio 1

/*
CSS


* {
    margin: 0;
    padding: 0;
  }
  
  body {
    background: var(--cor-fundo);
    color: var(--cor-fonte);
    font-family: 'Cinzel', serif;
    font-size: 38px;
    user-select: none;
    transition: 2s;
  }
  
  .container {
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .trono {
    background-image: url("https://caelum-online-public.s3.amazonaws.com/1369-alura-mais-dark-mode/trono-preto.png");
    background-size: cover;
    width: 450px;
    height: 350px;
    margin-bottom: 30px;
    position: relative;
    top: 10%;
    right: 5%;
  }

-----------------------------------------------------------------------------------------------
HTML


<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Manipulando o DOM - Aula 1</title>
  <link rel="stylesheet" href="css/exercicio.css">
</head>
<body>

<!-- fonte  --> 
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap" rel="stylesheet">
<!-- fonte  -->

<section class="container">
<div class="trono"></div>
<p id="texto">O inverno está chegando</p>
</section>
 <script src="js/exeercicio.js"></script>
</body>
</html>
________________________________________________________________________________________________________________________
js

texto = document.querySelector('#texto').textContent = "O inverno Chegou"; // utlizando o textContent o texto mudou
console.log(texto) */          


//_____________________________________________________________________________________________________________________________________________



// exercicio 2 -  JavaScript

/*const clique = document.querySelector('.page-calcular-calcular')

clique.addEventListener('click', fuiClicado)


function fuiClicado(){ 
 
  clique.innerHTML = 'NOTAS ENVIADAS'
  var botao = document.createElement('button');//cria o elemento
  botao.type = 'button' // defino o tipo do elemento
  botao.innerHTML = 'Parabéns voce esta avancando' // define o texto do elemento 
  botao.className = 'parabens' // definie uma classe que deve ser criada tabem no css para estilizalçao
  document.querySelector('.container').appendChild(botao) // designa qual o elemento pai dessa novo elemento
 
}*/
//_____________________________________________________________________________________________________________________________


/* ARRAYS
// Recuperendo um elemento de um Array atravé de uma indexOf(pega a posicao do elemento)
// juntamente com splice(coma a posicao e numero de elem,entos qye deve ser tirra do )
var lista = ['Laranja', 'Vermelho', 'Branco', 'Amarelo', 'Rosa']
var pos = lista.indexOf('Vermelho')
console.log(pos)
lista.splice(pos, 1)
console.log(lista)*/