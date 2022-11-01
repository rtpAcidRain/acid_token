const ILWAToken = artifacts.require('ILWAToken');

module.exports = function (deployer) {
  deployer.deploy(ILWAToken, 1000000);
};
