$(document).ready(function(){

  // Форма обратной связи
  $('.form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      },
      message: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: {
        required: 'Имя обязательно должно быть заполнено',
        minlength: 'Длина не менее 3-х символов'
      },
      email: {
        required: 'Поле email обязательно для заполнения',
        email: "Поле email обязательно для заполнения"
      },
      message: {
        required: 'Сообщение обязательно должно быть записано',
        minlength: 'Длина не менее 5-х символов'
      }
    }
  });
  // Форма обратной связи


  // Форма регистрации
  $('#sign-up').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      },
      password: {
        minlength: 8
      },
      password_confirmation: {
        minlength: 8,
        equalTo : "#password"
      }
    },
    messages: {
      name: {
        required: 'Имя обязательно должно быть заполнено',
        minlength: 'Длина не менее 3-х символов'
      },
      email: {
        required: 'Поле email обязательно для заполнения',
        email: "Поле email обязательно для заполнения"
      },
      password: {
        required: "Введите пароль",
        minlength: 'Длина не менее 8-ми символов'
      },
      password_confirmation: {
        required: "Введите пароль",
        minlength: 'Длина не менее 8-ми символов',
        equalTo: 'Пароли не совпадают'
      }
    }
  });
  // Форма регистрации


  $('.form input.phone').inputmask('7-999-999-99-99');


  $('#header__number .number__field input').inputmask('7-999-999-99-99');


  $('.modal__phone-inner form input').inputmask('7-999-999-99-99');

});
