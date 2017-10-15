module.exports = class extends think.Controller {
  __before() {
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Headers', 'x-requested-with,Content-Type');
    this.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    this.header('Access-Control-Allow-Credentials', true);
  }

  __after() {
    const method = this.ctx.method.toLowerCase();
    if (method === 'options') {
      this.body = '';
    }
  }
};
