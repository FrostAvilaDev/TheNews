'use client';
const { useState } = require("react");

const LoginForm = () => {
    const [formulario, setFormulario] = useState({
        email: '', 
        senha: ''
    });

  const aoSubmeter = (e) => {
    e.preventDefault();
    console.log("submeteu");
  };

  const aoAlterarValores = () => {
    const { name, value } = e.target;
    setFormulario({
        ...formulario,
        [name]: value
    })
  }
  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="E-mail">email</label>
        <input type="email" name="email" onChange={aoAlterarValores} />
      </div>
      <div>
        <label htmlFor="Senha">senha</label>
        <input type="password" name="senha" onChange={aoAlterarValores}/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoginForm;