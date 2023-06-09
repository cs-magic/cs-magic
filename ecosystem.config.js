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
				HOST: 'localhost',
				ENV: 'dev',
			},
			env_alpha: {
				HOST: '0.0.0.0',
				ENV: 'alpha',
			},
			env_prod: {
				HOST: '0.0.0.0',
				ENV: 'prod',
			},
		},
		{
			name: 'cs-magic-frontend-alpha',
			cwd: './cs-magic-frontend',
			script: './run-start.sh',
			env: {
				ENV: "alpha",
			},
		},
		{
			name: 'cs-magic-frontend-prod',
			cwd: './cs-magic-frontend',
			script: './run-start.sh',
			env: {
				ENV: "prod",
			},
		},
	]
}

