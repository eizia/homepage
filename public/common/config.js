require.config({
    baseUrl:'./',
    waitSeconds: 0,
    paths: {
        'director' : 'packages/director/build/director.min',
        'jquery' : 'packages/jquery/dist/jquery.min'
    },
    map: {
        '*': {
            'less': 'packages/require-less/less' // path to less
        }
    },
    deps: ['jquery', 'director'],
    shim: {
        'jquery': {
            'exports': 'jQuery'
        }
    }
});
require(['pages/'+document.body.getAttribute("data-main")+'/index'], function(Main) {

});