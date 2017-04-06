module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/*',
        'dist/assets/svg/*',
        'disk/assets/icons/*'
    ],
    runtimeCaching: [{
        urlPattern: /kerrongordon-8f9c4\.firebaseapp\.com/,
        handler: 'networkFirst'
    }],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
};