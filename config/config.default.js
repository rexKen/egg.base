module.exports = appInfo => {
    const config = {};
    config.keys = appInfo.name + '_1531232185123032_32325';

    // 加载 errorHandler 中间件
    config.middleware = ['errorHandler', 'forbidIp'],
        // 只对 /api 前缀的 url 路径生效
        config.errorHandler = {
            match: '/api',
        },

        // 屏蔽对应ip
        config.forbidIp = {
            forbidips: [
                // '192.168.30.87',
                // '127.0.0.1',
            ]
        }

    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.view = {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.tpl': 'nunjucks',
            },
        },

        config.sequelize = {
            dialect: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            database: 'test',
            username: 'root',
            password: 'Rlj950906',
        }

    config.ADMIN_PATH = '/'

    return config
};
