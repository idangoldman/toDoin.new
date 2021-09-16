function defaultTask(cb) {
  cb();
}

function devTask(cb) {
  console.log('devTask');
  cb();
}

exports.dev = devTask;
exports.default = defaultTask;
