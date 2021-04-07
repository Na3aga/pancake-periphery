const Router = artifacts.require("PancakeRouter01.sol");

const WETH = artifacts.require("WETH.sol");


module.exports = async function (deployer, network) {
    let weth;
    // const FACTORY_ADDRESS = '0x0A9073EE8AD664FBB1F952ed6f1835F70444EeC5';
    const FACTORY_ADDRESS = '0x97C9a936070c62f2026cb86c3133F4c529771B12';
    
    if(network === 'mainnet'){
        weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'); 
    } else { 
        await deployer.deploy(WETH);
        weth = await WETH.deployed(); // '0x2Aa8115a671672103f8485B735A306DF1e8bCF4d'
    }
    
    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
    // await deployer.deploy(Factory, addresses[0]);
};


