const $btnSignIn= document.querySelector('.sign-in-btn'), //Botón de Registro
      $btnSignUp = document.querySelector('.sign-up-btn'), //Botón de Inicio de Sesión 
      $signUp = document.querySelector('.sign-up'), //División de Inicio de Sesión
      $signIn  = document.querySelector('.sign-in'); //División de Crear Cuenta
document.addEventListener('click', e => { //Evento que realiza el cambio entre un formulario y otro.
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});