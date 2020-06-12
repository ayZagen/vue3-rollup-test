import vue from 'rollup-plugin-vue'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only'

export default {
    input: 'src/index.ts',
    output: {
        format: 'umd',
        file: 'dist/bundle.js'
    },
    plugins: [
        resolve(),
        css(),
        vue({
            css: false
        }),
        // typescript(),
        // with @rollup/plugin-typescript
        typescript({
          include: [/\.tsx?$/, /\.vue\?.*?lang=ts/]
        }),
    ]
}
