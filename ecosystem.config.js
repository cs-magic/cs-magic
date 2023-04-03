module.exports = {
	apps: [
		{
			name: "cs-magic-backend",
			cwd: './cs-magic-backend',
			script: './run-start.sh',
			env: {
				HTTP_PROXY: 'http://localhost:7890',
				PORT: 3366,
				HOST: 'localhost'
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
			env_prod: {
				ENV: "prod",
			}
		}
	]
}
