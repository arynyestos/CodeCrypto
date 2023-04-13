// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract OraculoNASA {
    address owner;
    uint256 public numeroMeteoritos;

    event _callbackNewData();

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function update() public onlyOwner {
        emit _callbackNewData();
    }

    function setNumeroMeteoritos (uint256 _num) public onlyOwner {
        numeroMeteoritos = _num;
    }
}