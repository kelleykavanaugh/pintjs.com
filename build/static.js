module.exports = {   
  name: 'static',

  dependsOn: [
    'css',
    'javascript'
  ],

  build: [
    'copy'
  ],

  config: {
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['apple-touch-icon-precomposed.png', 'index.html', 'favicon.ico'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    }
  },

  // TODO
  initialize: {}, 
  "build.production": [],
  deploy: [],
  "deploy.production": [],
};