$(document).ready(() => {
  // MASCARA
  $('#formulario-contato #telefone').mask('(00) 9 0000-0000', {
    translation: { 9: { pattern: [9] } },
    placeholder: '(00) 9 0000-0000',
  });

  // VALIDACAO
  $('#formulario-contato').validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      mensagem: { required: true },
    },
    messages: {
      nome: 'Este campo é obrigatório!',
      email: {
        required: 'Este campo é obrigatório!',
        email: 'Por favor, insira um email válido!',
      },
      telefone: 'Este campo é obrigatório!',
      mensagem: 'Este campo é obrigatório!',
    },
  });
});
