import vue from 'rollup-plugin-vue'
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: {
        format: 'umd',
        file: 'dist/bundle.js'
    },
    plugins: [
        resolve(),
        typescript(),
        vue(),
    ]
}
