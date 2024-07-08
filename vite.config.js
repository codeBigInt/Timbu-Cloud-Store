// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  build: {
    outDir: 'dist'  // This should be 'dist' by default
  }
}

export default config
