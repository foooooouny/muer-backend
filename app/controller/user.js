'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    async getUserById(ctx) {
      const id = ctx.params;
      console.log(id)
      ctx.body = "hi, muer, I'm getUserById";
    }

    async createOrUpdateUser(ctx) {

    }
  }
  return UserController;
};
