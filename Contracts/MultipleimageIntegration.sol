// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


 contract MultipleImages is ERC721URIStorage, Ownable{
     using Counters for Counters.Counter;
     Counters.Counter private _tokenIds;

  constructor() ERC721("Real Estate", "RET"){}

      struct TokenData {
        string[] imageUrls;
    }
     mapping(uint256 => TokenData) private tokenData;


function mintkaro(address account, uint256 tokenId, string[] memory imageUrls) external onlyOwner {

         for (uint256 i = 0; i < imageUrls.length; i++) {
            require(bytes(imageUrls[i]).length > 0, "Image URL must not be empty");
            tokenData[tokenId].imageUrls.push(imageUrls[i]);
        }

        _mint(account, tokenId);
    }

 }