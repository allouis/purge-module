function purge_module(id) {
  const purge_id = require.resolve(id);
  console.log(`purging ${purge_id}`);

  Object.keys(require.cache).forEach(function (cached_module_id) {
    const cached_module = require.cache[cached_module_id];

    // already been purged
    if (!cached_module) {
      return;
    }

    if (cached_module.children.map(mod => mod.id).includes(purge_id)) {
      purge_module(cached_module_id);
    }
  });
  require.cache[purge_id] = undefined;
}

module.exports = {
  set: (key, val) => {
    // do some cool shit
    console.log(`Setting ${key} to ${val}`);
    purge_module('./config');
    const config = require('./config');
    config.set(key, val);
  }
}
