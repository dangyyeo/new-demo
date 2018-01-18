const Mock = require('mockjs');

let arr = ['phone', 'mail', 'wechat', 'github'];
const icons = ['phone', 'mail', 'wechat', 'github'];
const resume = Mock.mock({
    content: '@csentence()',
    name: '@cname',
    job: '@cword(5, 8)',
    'contacts|4': [{
        'type|+1': icons,
        icon: Mock.Random.image('50*50', Mock.mock('@color'), '#FFF', 'png', 'A'),
        'isurl|+1': [true, false],
        'url|1': [
            '@url()', '@email', /^(13[0-9]|15[0136789]|18[89])-\d{4}-\d{4}$/,
        ],
        'urlText|1': [
            '@url()', '@email', /^(13[0-9]|15[0136789]|18[89])-\d{4}-\d{4}$/,
        ],
    }],
    educations: {
        icon: 'home',
        titleCh: '@cword(3, 5)',
        titleEn: '@word(5, 8)',
        'datas|2-3': [{
            type: '@cword(2, 3)',
            icon: '',
            name: '@ctitle(5)',
            major: '@ctitle(5,8)',
            start: '@date("yyyy")',
            end: '@date("yyyy")',
        }],
    },
    experiences: {
        icon: 'home',
        titleCh: '@cword(3, 5)',
        titleEn: '@word(5, 8)',
        'datas|3-5': [{
            icon: Mock.Random.image('50*50', Mock.mock('@color'), '#FFF', 'png', '@pick(["A", "E", "I", "O", "U"])'),
            company: '@ctitle(5)',
            start: '@date("yyyy-MM")',
            end: '@date("yyyy-MM")',
            'works|2-3': [{
                name: '@cword(3, 5)',
                'description|2-3': [
                    '@cparagraph(2, 3)',
                ],
            }],
        }],
    },
    skills: [{
        type: '前端',
        'includes|2-3': [{
            name: '@title(2, 3)',
            'description|2-5': [
                '@cparagraph(1, 2)',
            ],
        }],
    },
    {
        type: '后端',
        'includes|1-2': [{
            name: '@title(2, 3)',
            'description|2-5': [
                '@cparagraph(1, 2)',
            ],
        }],
    },
    {
        type: '其它',
        'includes|2-3': [{
            name: '@title(2, 3)',
            'description|2-5': [
                '@cparagraph(1, 2)',
            ],
        }],
    }],
});
module.exports = {
    'GET /resume': (req, res) => {
        res.json({ success: true, data: resume });
    },
};
