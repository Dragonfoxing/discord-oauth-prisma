import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    experimental: {
        hybridOutput: true
    },
    adapter: node({
        mode: 'standalone'
    })
});
