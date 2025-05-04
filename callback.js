
function saudacao(nome, callback) {
    console.log("Olá, " + nome + "!");
    callback();
  }
  function mostrarMensagem() {
    console.log("Seja bem-vindo ao sistema!");
  }
  saudacao("Anthony", mostrarMensagem);