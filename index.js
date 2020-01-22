const core = require('@actions/core');
const _7z =  require('7zip-min');

async function run() {
  try { 
    const source = core.getInput('pathSource');
    const target = core.getInput('pathTarget');

    core.info("packing " + source + " into " + target);
    const err = await new Promise((resolve, _) => {
      _7z.pack(source, target, function(e) {
        resolve(e);
      });
    });

    if (err !== null) {
      core.setFailed("create 7z archive failed: " + err);
      return;
    }
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
