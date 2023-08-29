// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <=0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LiquidityPool {
    IERC20 public token;
    address public tokenAddress;
    address public owner;
    uint256 public totalLiquidity;

    // here in token address we'll pass the address of the token contract deployed
    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
        token = IERC20(tokenAddress);
        owner = msg.sender;
    }

    //checking for accepted token
    function acceptedToken(address sender) public view returns (bool) {
        uint256 balance = token.balanceOf(sender);
        return balance > 0;
    }

    mapping(address => uint256) LiquidityProvider;

    function deposite(uint256 amount) external {
        require(amount > 0, "add more than 0");
        require(token.approve(address(this), amount), "not approved");
        require(
            token.transferFrom(msg.sender, address(this), amount),
            "Tx error"
        );

        // once added liquidity the provider should get an LP token ???

        totalLiquidity += amount;
        LiquidityProvider[msg.sender] += amount;
    }

    function withdraw(uint256 amount) external {
        require(LiquidityProvider[msg.sender] >= amount, "not Enough deposte");

        // incentive are need to be calculated and added here to add into amount ??

        token.transfer(msg.sender, amount);
        totalLiquidity -= amount;
        LiquidityProvider[msg.sender] -= amount;
    }
}
