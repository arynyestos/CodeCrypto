const MyToken = artifacts.require("MyToken"); // coge de build/contracts/MyToken.json

module.exports = function(deployer){
    deployer.deploy(MyToken);
}