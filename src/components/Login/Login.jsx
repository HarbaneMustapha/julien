const Login = () => {
	return (
		<div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' />
			</div>

			<div>
				<label htmlFor='password'>Mot de passe</label>
				<input type='password' id='password' name='password' />
			</div>

			<button type='submit'>Se connecter</button>
		</div>
	);
};

export default Login;
