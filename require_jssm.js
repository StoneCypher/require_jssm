
const jssm = require('jssm');





function compile_jssm_with_require() {

  require.extensions['jssm'] = function jssmLoader(module, filename) {

    const fileContent = fs.readFileSync(filename, 'utf8');
          machine     = jssm.compile(jssm.parse(fileContent));

    module.exports.default = machine;

  };

}





module.exports = { compile_jssm_with_require };
