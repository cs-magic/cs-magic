module.exports = {
	apps: [
		{
			name: "cs-magic-backend",
			cwd: './cs-magic-backend',
			script: './run-start.sh',
			env: {
//				HTTP_PROXY: 'http://localhost:7890',
//				HTTPS_PROXY: 'http://localhost:7890',
				PORT: 2001,
				HOST: 'localhost'
			},
			env_alpha: {
				HOST: '0.0.0.0'
			},
			env_prod: {
				HOST: '0.0.0.0'
			},
		},
		{
			name: 'cs-magic-frontend',
			cwd: './cs-magic-frontend',
			script: './run-start.sh',
			env: {
				ENV: "dev",
			},
			env_alpha: {
				ENV: "alpha",
			},
			env_prod: {
				ENV: "prod",
			},
		}
	]
}

