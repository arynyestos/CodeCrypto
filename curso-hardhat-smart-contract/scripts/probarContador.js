const hre = require("hardhat");

const dirContrato = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
    const provider = new hre.ethers.providers.JsonRpcProvider("http://localhost:8545");
    const signer = provider.getSigner();

    // console.log(hre.network.config)

    const contrato = await hre.ethers.getContractAt("Contador", dirContrato, signer);

    await contrato.incrementar();
    await contrato.incrementar();
    await contrato.incrementar();
    await contrato.incrementar();

    const valorContador = await contrato.contador();

    console.log(valorContador);
    
}

main();