import vue from 'rollup-plugin-vue'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.ts',
    output: {
        format: 'umd',
        file: 'dist/bundle.js'
    },
    plugins: [
        resolve(),
        vue(),
        postcss(),
        // typescript(),
        // with @rollup/plugin-typescript
        typescript({
          include: [/\.tsx?$/, /\.vue\?.*?lang=ts/]
        }),
    ]
}
