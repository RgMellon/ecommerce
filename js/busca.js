var campo_pesquisa = document.querySelector(".campo-pesquisa");

campo_pesquisa.addEventListener("input", function(){
  var valor_pesquisa = this.value;
  var livros = document.querySelectorAll(".livro");

  livros.forEach(function(l){
    if(valor_pesquisa.length > 0 ){
      var livro = l.querySelector(".titulo-h2").textContent;
      // console.log(livro);
      var expressao = new RegExp(valor_pesquisa, "i");
      if(!expressao.test(livro)){
         l.classList.add("esconde-campo");
      }else{
        l.classList.remove("esconde-campo");
      }
    }else{
      livros.forEach(function(l){
        l.classList.remove("esconde-campo");
      });
    }
  });

})
