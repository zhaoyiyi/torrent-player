const sources = {
  dmhy: require('./sources/dmhy')
}

exports.search = async (source, opts = {}) => {
  return sources[source](opts);
}