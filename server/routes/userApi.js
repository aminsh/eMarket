var bodyParser = require('body-parser');
var User = require('../models/user');

module.exports = function(app, express){
    var apiRouter = express.Router();

    apiRouter.route('/users')
        .post(function(req, res){
            var cmd = req.body;

            var newUser = new User({
                firstName: cmd.firstName,
                lastName: cmd.lastName,
                username: cmd.username
            });

            newUser.save(function(err, user){
                if(err){
                    console.error(err);
                    res.json({success: false});
                    return;
                }

                res.json({success: true});

            });
        });

    return apiRouter;
}

