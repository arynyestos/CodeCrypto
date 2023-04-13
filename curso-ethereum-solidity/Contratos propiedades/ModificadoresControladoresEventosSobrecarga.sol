// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ModificadoresControladoresEventos{
    bool public callSuccess;
    uint256 public valorDeSuma;
    address public usuario;
    address public creador;

    constructor(){
        creador = msg.sender;
    }

    modifier esElCreadorDelContrato(){
        require(msg.sender == creador, "No eres el creador del contrato");
        _;
    }

    modifier modificadorConParametros(uint8 numero) {
        require(numero > 0 && numero < 4, "El numero es mayor a 4");
        _;
    }

    function comprobarCreador(address nuevoCreador) public esElCreadorDelContrato {
        creador = nuevoCreador;
    }

    function testModificadorConParametro(uint8 numero) public modificadorConParametros(numero) esElCreadorDelContrato {
        callSuccess = true;
    }

    /* Eventos */

    event ObjetoEventoDePrueba (address wallet,string mensaje);
    event Log(uint256 suma, address wallet);

    function pruebaGestionDeErrores(uint numero) external {
        require(numero > 3, "El numero debe ser mayor a 3");
        assert (numero > 10);
        string memory mensajeFinal = "";
        if(numero > 20 && numero < 50) {
            mensajeFinal = "Numero Mayor a 3 y menor a 10";
        } else {
            mensajeFinal = "Numero Mayor a 10 y menor a 20 o numero mayor a 50";
        }
        emit ObjetoEventoDePrueba(msg.sender, mensajeFinal);
    }

    function pruebaTryCatchExternalCall(uint numeroA, uint numeroB) public {
        try new ContratoExterno().suma(numeroA, numeroB) returns (uint256 suma, address wallet) {
            emit Log(suma, wallet);
        } catch {
            emit ObjetoEventoDePrueba(msg.sender, "Error");
        }        
    }

    uint[] data;
    uint8 j = 0;

    function cicloConDowhile() public returns (uint[] memory){
        do{
            j++;
            data.push(j);
        } while(j < 5);
        return data;
    }

    uint[] datos2;
    uint8 x = 0;
    
    function cicloConwhile() public returns (uint[] memory){
        while(x < 5) {
            x++;
            datos2.push(x);
        }
        return datos2;
    }
}

    contract ContratoExterno {
        uint256 public calculaResultadoSuma;
        address public user;

        constructor() {
            user = msg.sender;
        }

        function suma(uint256 a, uint256 b) public returns (uint256, address) {
            calculaResultadoSuma= a + b;
            user = msg.sender;
            return (calculaResultadoSuma, user);
        }
    }

    contract ContratoDeSobrecargaDeFunciones {
        function suma(uint a, uint b) public pure returns (uint){
            return a + b;
        }

        function suma(uint a, uint b, uint c) public pure returns (uint) {
            return a + b + c;
        }

        function sumaCon2Parametros () public pure returns (uint){
            return suma(1,2);
        }

        function sumaCon3Parametros () public pure returns (uint){
            return suma (1,2,3);
        }

}