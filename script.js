
function ListaItens(){
  let itens = ["Computador "," Telefone "," Teclado "," Mouse "];

  let indexe = itens.map((item,index) => {
      return index
      

  });


  let QtdProdutos = itens.reduce((total,proximo,index) => {
   return index + 1
    
  });
  
  let exibirprodutos = itens.map((item,index) => {
    return item 
  });
  let mouseFora = itens.pop()

  let exibirprodutos2 = itens.map((item) => {
  return item
 });

 let busca = itens.find((item,index) => {
 return index + 1
     })
     
 var buscar = " Telefone "    
     
let removesegundoitem = itens.splice(buscar, 2);

  
 let exibirprodutos3 = itens.map((item,index) => {
  return item
 });

 
var numeros =  [0,1,3,5,7,9]; 
var remove = numeros.shift()
var {0 : zero}= numeros;
var {1 : um} = numeros;
var {2 : dois} = numeros;
var {3 : tres} = numeros;
var {4 : quatro} = numeros;
var {5 : cinco} = numeros;

var exibir = ' '+cinco+ ', '+ quatro+ ', '+ tres+ ', '+ dois+ ', '+ um + ' ,' + zero
 
 
 var data = new Date();
 
 var dia = (data.getDay() + 22)
 var mes = (data.getMonth() + 1)
 var ano = data.getFullYear()
 
let exibirData = dia + '/'+ mes +'/' + ano

 
 
 
 
 
 
 
  console.log(`Produtos em Estoque: ${exibirprodutos.join("/")}`);
  console.log(`Quantidade de Produtos em Estoque: ${QtdProdutos}`);
  console.log(`Produtos que Temos Agora: ${exibirprodutos2.join("/")}`);
  console.log(`Produto que foi pesquisado: ${busca}`);
  console.log(`Produtos que Temos Agora Novamente Atualizado: ${exibirprodutos2}`);
  console.log(`Produtos que Temos Agora Novamente Atualizado: ${exibirprodutos3}`);
  
  console.log(`ordem dos numeros ${numeros}`)
  console.log(`ordem dos numeros invertida:${exibir}`)
   console.log(`data de hoje é:${exibirData}`);
  

  
   

}

ListaItens();