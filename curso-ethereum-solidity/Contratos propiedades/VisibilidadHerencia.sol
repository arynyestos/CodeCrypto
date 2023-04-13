// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract A{
    uint public numeroPublico = 30;
    uint internal numeroInterno = 10;
    uint private numeroPrivate = 88;

    function regresarValorPublicoSinOperacionDentro() public view returns (uint) {
        return numeroPublico;
    }

    function regresarValorPublicoConOperacionDentro() public returns (uint) {
        numeroPublico = 3; // acceso interno
        return numeroPublico;
    }

    function regresarValorExternalConOperacionDentro() external returns (uint) {
        numeroPrivate = 99;
        return numeroPrivate;
    }

    function regresarValorExternalSinoperacion() external view returns (uint) {
        return numeroPrivate;
    }

    function regresarValorPublicoInterno() public view returns (uint) {
        return regresarValorPublicoSinOperacionDentro();
    }

    function regresarNumeroInternoConFuncionInterna() internal view returns (uint256) {
        return numeroInterno;
    }

    function retornarPureValor() external pure returns (uint256) {
        uint a = 33;
        uint b = 22;
        uint c = a + b;
        return c;
    }

    function mandarCriptoAlContrato() public payable {
        uint256 saldo = address(this).balance;
        saldo + msg.value;
    }

    function saldoDelContrato() public view returns (uint256) {
        uint256 saldo = address(this).balance;
        return saldo;
    }
}

contract B {
    A instanciaDeA = new A();

    function llamarAVariableDelContratoA() public view returns (uint) {
        return instanciaDeA.numeroPublico(); // Llamada externa de otro contrato
    }
    
    function llamarAMetodoDelContratoA() public returns (uint) {
        return instanciaDeA.regresarValorExternalConOperacionDentro(); // Llamada externa de otro contrato
    }

    function llamarAVariableInternaDelContratoA() public view returns (uint) {
        return instanciaDeA.regresarValorExternalSinoperacion(); // Llamada externa de otro contrato
    }
}

contract C is A {
    function llamarAlContratoAPorHerencia() public returns (uint) {
        numeroInterno = 3; // valor por Herencia al Contrato A
        return numeroInterno;
    }

    function regresarNumeroInterno() public view returns (uint) {
        return numeroInterno;
    }
}
