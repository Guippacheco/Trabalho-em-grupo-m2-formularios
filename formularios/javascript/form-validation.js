// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


























{/* <div class="row gy-3">
<div class="col-md-6">
  <label for="cc-name" class="form-label">Nome do cartão</label>
  <input type="text" class="form-control" id="cc-name" placeholder="" required>
  <small class="text-muted">Nome completo conforme exibido no cartão</small>
  <div class="invalid-feedback">
    Campo obrigatório
  </div>
</div>

<div class="col-md-6">
  <label for="cc-number" class="form-label">Número do cartão de crédito</label>
  <input type="text" class="form-control" id="cc-number" placeholder="" required>
  <div class="invalid-feedback">
    Campo obrigatório
  </div>
</div>

<div class="col-md-3">
  <label for="cc-expiration" class="form-label">Expiração</label>
  <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
  <div class="invalid-feedback">
    Campo obrigatório
  </div>
</div>

<div class="col-md-3">
  <label for="cc-cvv" class="form-label">CVV</label>
  <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
  <div class="invalid-feedback">
    Campo obrigatório
  </div>
</div>
</div> */}
