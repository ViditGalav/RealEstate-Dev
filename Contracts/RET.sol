// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract RETToken is ERC20, Ownable, Pausable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10**decimals());
    }

    // Mint new tokens (onlyOwner)
    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    // Burn tokens (onlyOwner)
    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }

    // Pause token transfers (onlyOwner)
    function pause() public onlyOwner {
        _pause();
    }

    // Unpause token transfers (onlyOwner)
    function unpause() public onlyOwner {
        _unpause();
    }

    // Override _beforeTokenTransfer to implement custom transfer logic
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);

        // Add your custom transfer logic here
        // For example, check ownership or approval mechanisms
        // Ensure to emit events for transparency
    }

   
}