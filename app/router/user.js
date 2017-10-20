'use strict';

module.exports = app => {
  /**
  * @api {get} /api/user/:id  用户信息
  * @apiName user info
  * @apiGroup User
  * @apiParam { String } uname 用户名. 或者uid
  * @apiParam {Number} uid 用户id 或者uname
  * @apiSuccess { Object } data 具体信息 .
  *
  **/

  app.get('/api/user/:id', 'user.getUserById');
}