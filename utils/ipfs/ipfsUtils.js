class ipfsUtils {
  // check validate for hash
  static validator(hash) {
    return hash.startsWith('Qm') || hash.startsWith('ba');
  }
}

module.exports = {
  ipfsUtils,
};
