var path = require('path');

module.exports = {
    webpack: {
        publicPath: '',
        rules: {
            babel: {
                exclude: '/node_modules/',
                include: [
                    path.join(__dirname, 'src'),
                ]
            }
        }
    }
};
