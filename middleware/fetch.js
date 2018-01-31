const fetch = require('node-fetch')

const config = {
    BASE_URL: 'http://127.0.0.1:3001'
}

const fetchReq = function(url, method, params) {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(function(res) {
        return res.json();
    })
}

module.exports = {
    writeLog: function(params) {
        return fetchReq(`${config.BASE_URL}/note/log`, 'POST', params);
    },

}