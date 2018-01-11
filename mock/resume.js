const Mock = require('mockjs');

const resume = Mock.mock({
    'data|100': [{
        'id|+1': 1,
        name: '@cname',
        'age|11-99': 1,
        address: '@region',
    }],
});
module.exports = {
    'GET /resume': (req, res) => {
        res.json({
            success: true,
            data: resume.data,
        });
    },
};
