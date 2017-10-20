'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = "hi, muer, I'm Founy";
    }
  }
  return HomeController;
};
