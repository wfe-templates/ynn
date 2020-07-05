/**
 * Created by busyhe on 2019-04-01 15:36.
 * Email: 525118368@qq.com
 */
module.exports = app => {
    const router = app.router;
    router.add('/api/(.*)', (ctx, next) => {
        ctx.path = ctx.path.substr(4);
        return next();
    });
};
