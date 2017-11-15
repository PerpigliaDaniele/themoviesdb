module.exports = function (app, express) {

    var path = require('path');
    app.use(express.json());
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'public', 'css')));
    app.use('/app', express.static(path.join(__dirname, '..', '..', 'app')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..','node_modules','jquery')));
    app.use('/angular-jk-rating-stars', express.static(path.join(__dirname, '..', '..','node_modules','angular-jk-rating-stars')));
    app.use('/angular-ui-router', express.static(path.join(__dirname, '..', '..','node_modules','angular-ui-router')));
    
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    app.use('/api/films', require('./films'));
    app.use('/api/generi', require('./generi'));

    app.get('/*', (req, res) => {
        res.status(404).redirect("/");
    });


}