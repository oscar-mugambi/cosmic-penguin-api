module.exports = {
  apps: [{
    name: 'cosmic-penguin-api',
    script: './dist/server.js',
    instances: '1',
    exec_mode: 'cluster',
    watch: false,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
}
