const Contador = artifacts.require("Contador");

contract("Contador", function(){
    it("should assert true", async function(){
        await Contador.deployed();
        return assert.isTrue(true);
    })
})