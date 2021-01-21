const got = require('got');

const makeURL = () => `https://api.tenor.com/v1/random?q=kissanime&key=LIVDSRZULELA&limit=1`;

class kissapi {
    async random() {
        const res = await got(makeURL(), {
            responseType: 'json'
        })

        if (!res || !res.body) {
            throw new Error('Invalid response of site')
        }

        return res.body
    }
}

module.exports = kissapi;