/* PAGINA PRINCIPAL */
function loginIndex() {
    document.getElementById('login').innerHTML = 
     `<div>
        <form class="px-4 py-3">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">Email:</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">Senha:</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
          </div>
          <div class="mb-3">
          <div class="form-check"></div>
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
        <p> </p>
        <a id='rec' onclick="recuperarSenha1()">Recuperar Senha</a>
      </div>`
  }

  function recuperarSenha1(){
    document.getElementById('login').innerHTML =
      `<div>
        <form class="px-4 py-3">
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">Email:</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
          </div>
          <div class="mb-3">
          <div class="form-check"></div>
          <button type="submit" class="btn btn-primary" onclick='enviado()'>Enviar</button>
        </form>
      </div>`
  }

  function enviado() {
    document.getElementById('login').innerText = 'Link de recuperção enviado para seu email!'
  }
/* PAGINA PRINCIPAL */




/* PAGINA DE PRODUTO */
function coracao() {
    document.getElementById('coracao').style.color = "rgb(220, 0, 0)"
  }
/* PAGINA DE PRODUTO */




/* PAGINA DE FORMULARIO */
function compra() {
    let conteudo = document.getElementById('conteudo')

    if (document.getElementById('credit').checked) {
      conteudo.innerHTML = 
      `<div class="row gy-3">
        <div class="col-md-6">
          <label for="cc-name" class="form-label">Nome no cartão</label>
          <input type="text" class="form-control" id="cc-name" placeholder="" required>
          <small class="text-muted">Nome completo conforme exibido no cartão</small>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>

        <div class="col-md-6">
          <label for="cc-number" class="form-label">Número do cartão de crédito</label>
          <input type="text" class="form-control" id="cc-number" placeholder="" required>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>

        <div class="col-md-3">
          <label for="cc-expiration" class="form-label">Expiração</label>
          <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>

        <div class="col-md-3">
          <label for="cc-cvv" class="form-label">CVV</label>
          <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>
      </div>`
    } else if (document.getElementById('debit').checked) {
      conteudo.innerHTML = 
      `<div class="row gy-3">
        <div class="col-md-6">
          <label for="cc-name" class="form-label">Nome no cartão</label>
          <input type="text" class="form-control" id="cc-name" placeholder="" required>
          <small class="text-muted">Nome completo conforme exibido no cartão</small>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>

        <div class="col-md-6">
          <label for="cc-number" class="form-label">Número do cartão de crédito</label>
          <input type="text" class="form-control" id="cc-number" placeholder="" required>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>

        <div class="col-md-3">
          <label for="cc-expiration" class="form-label">Expiração</label>
          <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>

        <div class="col-md-3">
          <label for="cc-cvv" class="form-label">CVV</label>
          <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
          <div class="invalid-feedback">
            Campo obrigatório!
          </div>
        </div>
      </div>`

    } else if (document.getElementById('paypal').checked) {
      conteudo.innerHTML = 
      `<img src="../img/qrcode.png">
      <p>Escaneie o código para realizar o pagamento.</p>`
    }
  }
/* PAGINA DE FORMULARIO */


/* Validação de cep*/


$(document).ready(function () {

  function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");

  }

  //Quando o campo cep perde o foco.
  $("#cep").blur(function () {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#uf").val("...");


        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#rua").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#uf").val(dados.uf);

