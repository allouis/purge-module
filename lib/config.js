const config = {
  name: 'default'
};

module.exports = {
  get: key => config[key],
  set: (key, val) => config[key] = val,
}
