// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TransferOwnership is ERC1155, Ownable {
    // mapping the token Id, with the owner of the token ID
    mapping(uint256 => address) private PropertyTokenOwners;
    
    // mapping of token ID to total no of tokens
    mapping(uint256 => uint256) private TotalTokens;

    constructor() ERC1155("your_token_URI") {}

    function mint(address account, uint256 tokenId, uint256 amount) external onlyOwner {
        _mint(account, tokenId, amount, "");
        PropertyTokenOwners[tokenId] = account;
        TotalTokens[tokenId] = amount;
    }

    // IF the newOwner address owns all tokens associated with the specific tokneID
    //then the ownership of the full owernship of the property will go to the "newOwner"
    function FullOwnershipofProperty(address newOwner, uint256 tokenId) external {
    
        require(balanceOf(newOwner, tokenId) == TotalTokens[tokenId], "this address does not own all tokens");
        PropertyTokenOwners[tokenId] = newOwner;
       }
}