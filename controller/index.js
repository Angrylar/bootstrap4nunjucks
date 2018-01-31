const { writeLog } = require('./../middleware/fetch');
module.exports = {
    'GET /:id': async(ctx, next) => {
        // console.log(ctx);
        writeLog({ log: ctx.params.id })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            })

        let navListObj = [{
            name: '一级目录A',
            id: 'catalogA',
            icon: 'fa-sitemap',
            locate: '',
            sonList: []
        }, {
            name: '一级目录B',
            id: 'catalogB',
            icon: 'fa-area-chart',
            locate: '',
            sonList: [{
                name: '二级目录A',
                id: 'catalogBA',
                locate: '',
                sonList: []
            }, {
                name: '二级目录B',
                id: 'catalogBB',
                locate: '',
                sonList: []
            }, {
                name: '二级目录C',
                id: 'catalogBC',
                locate: '',
                sonList: []
            }, ]
        }, {
            name: '一级目录C',
            id: 'catalogC',
            icon: 'fa-table',
            locate: '',
            sonList: [{
                name: '二级目录A',
                id: 'catalogCA',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogCAA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogCAB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogCAC',
                    locate: '',
                }, ]
            }, {
                name: '二级目录B',
                id: 'catalogCB',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogCBA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogCBB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogCBC',
                    locate: '',
                }, ]
            }, {
                name: '二级目录C',
                id: 'catalogCC',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogCCA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogCCB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogCCC',
                    locate: '',
                }, ]
            }, ]
        }, {
            name: '一级目录D',
            id: 'catalogD',
            icon: 'fa-wrench',
            locate: '',
            sonList: [{
                name: '二级目录A',
                id: 'catalogDA',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogDAA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogDAB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogDAC',
                    locate: '',
                }, ]
            }, {
                name: '二级目录B',
                id: 'catalogDB',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogDBA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogDBB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogDBC',
                    locate: '',
                }, ]
            }, {
                name: '二级目录C',
                id: 'catalogDC',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogDCA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogDCB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogDCC',
                    locate: '',
                }, ]
            }, ]
        }, {
            name: '一级目录E',
            id: 'catalogE',
            icon: 'fa-file',
            locate: '',
            sonList: [{
                name: '二级目录A',
                id: 'catalogEA',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogEAA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogEAB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogEAC',
                    locate: '',
                }, ]
            }, {
                name: '二级目录B',
                id: 'catalogEB',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogEBA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogEBB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogEBC',
                    locate: '',
                }, ]
            }, {
                name: '二级目录C',
                id: 'catalogEC',
                locate: '',
                sonList: [{
                    name: '三级目录A',
                    id: 'catalogECA',
                    locate: '',
                }, {
                    name: '三级目录B',
                    id: 'catalogECB',
                    locate: '',
                }, {
                    name: '三级目录C',
                    id: 'catalogECC',
                    locate: '',
                }, ]
            }, ]
        }, ];





        ctx.render('./component/index.html', {
            title: 'Welcome',
            inner: 'inner!!!',
            content: {
                header: 'header!12!12!',
                nav: 'nav...',
                content: 'content???',
                footer: 'footer!!!'
            },
            lists: [{
                id: '123',
                name: 'Tr',
                sex: 'M',
                age: 21
            }, {
                id: '321',
                name: 'Tri',
                sex: 'F',
                age: 25
            }, {
                id: '13',
                name: 'Tric',
                sex: 'F',
                age: 29
            }, {
                id: '12',
                name: 'Trick',
                sex: 'M',
                age: 22
            }, ],
            params: {
                id: ctx.params.id
            },
            navList: navListObj
        });
    }
};