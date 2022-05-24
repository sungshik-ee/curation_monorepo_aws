const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.(j|t)sx?$/,
            use: defaultLoaders.babel,
            include: [path.join(__dirname, '../../packages')],
        });
        return config;
    },
};

module.exports = nextConfig;
