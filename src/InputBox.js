import TextField from '@material-ui/core/TextField';

const InputBox=()=>{
	return (
		<div>
			<TextField 
				id="account" 
				label="E-Mail Address" 
				variant="outlined" 
			/>
			<TextField
				id="password"
				label="Password"
				type="password"
				autoComplete="current-password"
				variant="outlined"
			/>
		</div>
	);
}

export default InputBox;