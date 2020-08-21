// app/router.js
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    // router.get('/api/v2/topics', controller.dept);
    router.get('/api/user', controller.user.index);
    router.post('/api/user', controller.user.save);
};
