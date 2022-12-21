geth --datadir nodo1 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8546 --allow-insecure-unlock --unlock "0x93a485ba13a3d06fc41165e8811c751a20ed5766" --password pwd.txt --port 30034 --bootnodes "enode://4563fbf8b901f3300060950028dfcc1ace662e9656df5bc1a5d59fcf2b059b727edad7a7c255a8eec4cb6e9a12a90981545805ee46e5e1854c510b05dbcca0c5@127.0.0.1:0?discport=30301"

geth --datadir nodo2 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8547 --allow-insecure-unlock --unlock "0xe1608f70e24738d86fc48fb7eba8fb351417b2ef" --password pwd.txt --port 30035 --bootnodes "enode://4563fbf8b901f3300060950028dfcc1ace662e9656df5bc1a5d59fcf2b059b727edad7a7c255a8eec4cb6e9a12a90981545805ee46e5e1854c510b05dbcca0c5@127.0.0.1:0?discport=30301" --ipcpath "\\.\pipe\geth2.ipc" --authrpc.port 8552

geth --datadir nodo3 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8548 --allow-insecure-unlock --unlock "0x90678c73b569fc3c4692de5db7ba0e843bb9fabc" --password pwd.txt --port 30036 --bootnodes "enode://4563fbf8b901f3300060950028dfcc1ace662e9656df5bc1a5d59fcf2b059b727edad7a7c255a8eec4cb6e9a12a90981545805ee46e5e1854c510b05dbcca0c5@127.0.0.1:0?discport=30301" --ipcpath "\\.\pipe\geth3.ipc" --authrpc.port 8553

geth --datadir nodo4 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8549 --allow-insecure-unlock --unlock "0xb130eb02e6bbbe77266be019b852f1fc5f0736cd" --password pwd.txt --port 30037 --bootnodes "enode://4563fbf8b901f3300060950028dfcc1ace662e9656df5bc1a5d59fcf2b059b727edad7a7c255a8eec4cb6e9a12a90981545805ee46e5e1854c510b05dbcca0c5@127.0.0.1:0?discport=30301" --ipcpath "\\.\pipe\geth4.ipc" --authrpc.port 8554

var tx = {from: "0x90678c73b569fc3c4692de5db7ba0e843bb9fabc", to:"0xB36Fb73bFA836a928dAfA8131095b4e7e598b8a7", value: web3.toWei(111, "ether")}
