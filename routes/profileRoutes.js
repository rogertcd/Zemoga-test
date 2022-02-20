const { Router } = require('express');
const router = Router();
const usuarioController = require('../controllers/usuarioController');
const twitterController = require('../controllers/twitterController');

router.get('/', (req, res) => {
    usuarioController.completeList().then((datos) => {
        // console.log('usuarios', datos);
        res.render('list', {
            users: datos
        });
    });
});

router.get('/profile/:id/:twitter_user', (req, res) => {
    let idUsuario = req.params.id,
        twitterUser = req.params.twitter_user
    usuarioController.getDataUser(idUsuario).then((datos) => {
        twitterController.getTweets(twitterUser).then((tweets) => {
            res.render('profile', {
                user: datos,
                tweets: tweets
            });
        });
    });
});


router.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);

router.get('/api/usuario/list', usuarioController.list);

router.get('/api/usuario/find/username/:username', usuarioController.find);

module.exports = router;