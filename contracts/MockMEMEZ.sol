// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/fraxswap/IFraxswapRouter.sol";

contract MockMEMEZ is ERC20 {
    address constant internal fraxswapRouter = 0xD99D1c33F9fC3444f8101754aBC46c52416550D1;

    constructor() ERC20('MAMOZ Token', 'MAMOZ') { }

    function list(uint256 amount) external payable {
        _mint(address(this), amount);
        _approve(address(this), fraxswapRouter, amount);

        IFraxswapRouter(fraxswapRouter).addLiquidityETH{
                value: address(this).balance
            }(
            address(this),
            amount,
            amount,
            address(this).balance,
            address(0x0000000000000000000000000000000000000000),
            block.timestamp
        );
    }
}
