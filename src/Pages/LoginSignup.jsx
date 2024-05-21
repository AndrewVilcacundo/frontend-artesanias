import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Registrarse</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Tu nombre' />
            <input type="email" placeholder='Correo Electrónico' />
            <input type="password" placeholder='Contraseña' />
          </div>
          <button>Continuar</button>
          <p className="loginsignup-login">¿Ya tienes una cuenta? <span>Entra aqui</span></p>
            <div className="loginsignup-agree">
              <input type="checkbox" name='' id='' />
              <p>Yo acepto todos los términos de uso...</p>
            </div>        
        </div>
      </div>
  )
}

export default LoginSignup
