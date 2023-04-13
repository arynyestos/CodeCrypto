// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MemoriaLlamadas{
    uint public numeroPublico = 30;
    uint internal numeroInterno = 10;
    uint private numeroPrivate = 88;
    address public propietarioDeLaTransaccion;

    constructor() {
        propietarioDeLaTransaccion = msg.sender;
    }

    function mandarCriptoAlContrato() public payable {
        uint256 balance = address(this).balance;
        balance += msg.value;
    }
    function balanceDelContrato() public view returns (uint256) {
        uint256 balance = address(this).balance;
        return balance;
    }
    function regresarValorBinarioDelPayload() public pure returns (bytes memory) {
        return msg.data;
    }
    function represar4ValorBinarioDelPavload() public pure returns(bytes4) {
        return msg.sig;
    }

    function regresarTransaccionGasPriceView() public view returns (uint256){
        balanceDelContrato();
        return tx.gasprice;
    }

    function regresarTransaccionOrigin() public view returns (address){
        balanceDelContrato();
        return tx.origin;
    }

    function regresarBlockhash(uint numeroDeBloque) public view returns (bytes32) {
        return blockhash(numeroDeBloque);
    }

    function regresarDificultadDelBloque() public view returns (uint) {
        return block.difficulty;
    }

    function regresarNumeroDeBloque() public view returns (uint) {
        return block.number;
    } 

    function regresarMineroBeneficiario() public view returns (address payable) {
        return block.coinbase;
    }

    function regresarChainIdGasLimitTimestamp() public view returns (uint,uint,uint) {
        return (block.chainid, block.gaslimit, block.timestamp);
    }

    function mandarCriptoAWalletConTransfer(address payable direccionAEnviar) public payable {
        direccionAEnviar.transfer(msg.value);
    }

    function mandarCriptoAWalletConSend(address payable direccionAEnviar) public payable {
        direccionAEnviar.send(msg.value);
    }
}

contract ContratoQueLlamaraAlOtroContrato {
    uint256 first; // slot 0
    uint256 second; // slot 1
    bool public callSuccess; // slot2
    uint256 public valorDeSuma; // slot3
    address public usuario; // slot4

    function addValuesWithDelegateCall(address contratoSuma, uint256 a, uint256 b) public returns (uint256) {
        (bool success, bytes memory result) = contratoSuma.delegatecall(abi.encodeWithSignature("add(uint256,uint256)", a, b));
        callSuccess = success;
        (valorDeSuma, usuario) = abi.decode(result, (uint256, address));
        return valorDeSuma;
    }
    function addValuesWithCall(address contratoSuma, uint256 a, uint256 b) public returns (uint256) {
        (bool success, bytes memory result) = contratoSuma.call(abi.encodeWithSignature("add(uint256, uint256)", a, b));
        callSuccess = success;
        (valorDeSuma, usuario) = abi.decode(result, (uint256, address));
        return valorDeSuma;
    }
}

contract ContratoQueQuieroLlamarQueNoConozcoElABI{
    uint256 public calculaResultadoSuma;
    address public user;
    function add(uint256 a, uint256 b) public returns (uint256, address) {
        calculaResultadoSuma = a + b;
        user = msg.sender;
        return(calculaResultadoSuma, user);
    }
}