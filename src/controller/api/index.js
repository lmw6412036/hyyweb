const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        this.body = {code: 0};
    }
};
