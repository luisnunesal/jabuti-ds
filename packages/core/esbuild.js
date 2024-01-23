const esbuild = require('esbuild');

const { dependencies, peerDependencies } = require('./package.json');

// create a list of dependencies to be removed from output bundle
const depsList = Object.keys({ ...dependencies, ...peerDependencies });

const defaultConfig = {
  bundle: true,
  minify: true,
  keepNames: true,
  metafile: true,
  external: depsList,
  target: 'es2018',
  entryPoints: ['./src/index.ts'],
};

(async () => {
  try {
    const OutputPromises = await Promise.all([
      esbuild.build({
        ...defaultConfig,
        outfile: './lib/index.esm.js',
        format: 'esm',
      }),
      esbuild.build({
        ...defaultConfig,
        outdir: './lib',
        platform: 'node',
        format: 'cjs',
      }),
    ]);

    OutputPromises.forEach((result) => {
      const output = result?.metafile?.outputs;

      Object.keys(output || {}).forEach((fileName) => {
        // convert to kilobyte
        const fileSize = output[fileName].bytes / 1000;

        console.log(`${fileName} => ${fileSize} Kb`);
      });
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
