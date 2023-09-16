// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RentTokens is ERC721, Ownable {
    uint256 public rentAmount; 
    uint256 public rentPeriod=30 days; 
    
    mapping(address => uint256) public rentedUntil; 
    // mapping the  rentees address with time period 

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _rentAmount
        
    ) ERC721(_name, _symbol) {
        rentAmount = _rentAmount;
        
    }

    
    function mintNFT(address recipient, uint256 tokenId) external onlyOwner {
        _mint(recipient, tokenId);
    }

    function rentNFT(uint256 tokenId) external payable {
        require(rentedUntil[msg.sender] == 0, "NFT is already rented by you.");
        require(msg.value >= rentAmount, "Insufficient Ether sent.");

        rentedUntil[msg.sender] = block.timestamp + rentPeriod;
        //safeTransferFrom transfer the ownership to the renter
        safeTransferFrom(owner(), msg.sender, tokenId);
    }

    function returnNFT(uint256 tokenId) external {
        require(rentedUntil[msg.sender] >= block.timestamp, "token is not rented by you or expired.");
        require(ownerOf(tokenId) == msg.sender, "You do not own the token.");
        require(block.timestamp >= rentedUntil[msg.sender], "Renting period is not completed");
        //transfering the nft from rentee to the previous owner
        safeTransferFrom(msg.sender, owner(), tokenId);
        rentedUntil[msg.sender] = 0;
    }

    function currentOwneroftheTokenIs(uint256 tokenId) external view returns (address) {
    require(_exists(tokenId), "Token ID does not exist.");
    return ownerOf(tokenId);
}

    function withdrawCollateral() external {
        require(rentedUntil[msg.sender] == 0, "Cannot withdraw collateral while token is rented");
        require(address(this).balance >= rentAmount, "Contract balance is less than rent amount");

        uint256 amountToWithdraw = rentAmount;
        rentedUntil[msg.sender] = 0;

        payable(msg.sender).transfer(amountToWithdraw);
    }
    function withdrawRemainingEther() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No remaining Ether in the contract");
        payable(owner()).transfer(balance);
    }
}