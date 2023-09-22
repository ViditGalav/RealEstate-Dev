// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RentTOKEN is ERC1155, Ownable {
    //mapping Token Id to no of tokens associated to that particular NFT
    mapping(uint256 => uint256) private tokenSupply;
   
    uint public Monthrent=1 ether;
    uint public YearRent=12 ether;
    
    //mapping rentees address with the renting period
    mapping(address => uint256) public rentedTill;
    

    constructor() ERC1155("RealEstate") {}
    

    
    function mint(address account, uint id, uint amount) public onlyOwner {
        _mint(account, id, amount,"");
        tokenSupply[id] += amount;
    }

        
        
        function RentforMonth(address from,uint id, uint amount)  public  payable {
        require(msg.value>=Monthrent,"You don't have sufficient balance to rent this token");
        rentedTill[msg.sender]= block.timestamp+ 30 days;
        safeTransferFrom( from,msg.sender, id, amount, "");
      
        
    }


    
        function RentforYear(address from,uint id, uint amount)  public  payable {
        require(msg.value>=YearRent,"You don't have sufficient balance to rent this token");
        rentedTill[msg.sender]= block.timestamp+ 365 days;
        safeTransferFrom(from, msg.sender, id, amount, "");
       

    }

       function ReturnToken(address owner, uint256 id, uint256 amount) public {
       require(balanceOf(msg.sender, id)>0,"You do not own this token");
       require(block.timestamp == rentedTill[msg.sender], "tokens can be returned after completion of renting period only");
       safeTransferFrom(msg.sender, owner, id,amount, "");
       }

     

    } 
