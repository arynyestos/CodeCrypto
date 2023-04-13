// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Tipos{
    // esto es un comentario de una linea
    int enteroConSigno; // Entero con signo
    //Enteros sin signo (múltiplos de 8)
    uint8 enteroSinSigno8; // entero sin signo de 8 bits
    uint16 enteroSinSigno16; // entero sin signo de 8 bits
    uint256 enterosinSigno256; // entero sin signo de 256 bits 
    uint256 constant DECIMALES = 1 * (10 ** 18); // valor que no cambia (las constantes en mayúsculas)
    string valor = "HOLA MUNDO";
    bytes1 bytes1Var;
    bytes5 bytes5Var;
    bytes32 bytes32Var;
    address direccionDeLaWallet; // tipo de dato Address o direccion
    uint256[] arrayDeUint256; // array de uint256
    uint32[][5] arrayFijoDe5ConTamanoDinamicoEnteroSinSigno32; 

    enum COLORES{BLANCO, NEGRO, VERDE} //única variable que se declara sin poner después un punto y coma

    mapping (address => uint256) numerosEnDirecciones;
    // 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA1 - 80
    // 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA2 = 50
    // 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA3 = 20

    mapping (uint8 => address) direccionesEnNumeros;
    // 33 = 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA1
    // 25 = 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA2
    // 88 = 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA3

    mapping (address => mapping (address => uint256)) numerosEnDireccionesDeDirecciones;
    // OxAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA1
    //      OxAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA4 = 99
    //      0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA5 = 35
    // 0xAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA2
    //      OxAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA6 = 11
    //      OxAA5A349e0B1e7D4AC1A17A3DA1e320CBdBe1FAA7 = 15

    //Para acceder al valor 15:
    uint256 num = numerosEnDireccionesDeDirecciones[0x79219E0514a0ED8B495C1BBA0180Cd12CdE40242][0x59dfDd2af55E3D636A2cc0a3338615E59056E478];

    struct TipoDatoPersonalizado {
        uint256 cantidadCompradaToken;
        string nombrePropietario;        
    }

    TipoDatoPersonalizado variablePersonalizada;
    // variablePersonalizada.cantidadCompradaToken = 8;
    // variablePersonalizada.nombrePropietario = "Pepe";
    
    function asignarValores(uint256 _cantidad, string memory _nombre) public {
        variablePersonalizada.cantidadCompradaToken = _cantidad;
        variablePersonalizada.nombrePropietario = _nombre;
    }

    //Esto también se puede juntar con mappings
    mapping (address => TipoDatoPersonalizado) direccionesENTipoPersonalizado;
}
