// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <=0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

using SafeMath for uint256;
contract RealEstate is ERC20{



struct PropertyFinances {
    uint Tokenprice;
    uint TokensNumbers;
    uint MonthlyCosts;
    uint NetRentyear;
    uint NetRentmonth;
    uint TotalInvestment;
     uint Interiorsize;
     uint Bedroom;
    uint Bathroom;
    uint LotSizeinsqft;
}

struct PropertyDetails {
    string Fulladress;

    string PropertyManager;
    uint OfferingPercent;
}

address public owner; 



mapping (address => PropertyFinances ) public PropertykiFinances ;
mapping (address => PropertyDetails ) public PropertykiDetails ;

mapping(address => uint256) public stakeHolders; //to be used in stakeholder deciding function
mapping(address => bool) public castedVote;

string[] options;
uint256[] winnerList;


constructor() ERC20("RealEstateToken", "RET") {
    owner = msg.sender;
}


function DecideTokenprice(address _property)public {
  PropertyFinances storage property = PropertykiFinances[_property];
  property.Tokenprice=property.Bedroom.add(property.Bathroom)
  .add(property.LotSizeinsqft).add(property.Interiorsize);

  }


 
 function DecideTotalInvestment(address _property) public  {
 PropertyFinances storage property = PropertykiFinances[_property];
 property.TotalInvestment=property.Tokenprice*property.TokensNumbers;
  
 }

function DecideNetRentyear(address _property) public {
   PropertyFinances  storage property =PropertykiFinances[_property];
    property.NetRentyear=property.TotalInvestment.mul(8).div(100);
   
}


function DecideNetRentmonth(address _property) public {
  PropertyFinances storage property = PropertykiFinances[_property];
  property.NetRentmonth = property.NetRentyear.div(12);
 
}
  function minttheTokenprice(address _property) public {
    PropertyFinances storage property = PropertykiFinances[_property];
    _mint(_property , property.Tokenprice);
  }


  function minttheTokenInvestment(address _property) public {
    PropertyFinances storage property = PropertykiFinances[_property];
    _mint(_property ,property.TotalInvestment );
  }

  function minttheTokenRentperyear(address _property) public {
    PropertyFinances storage property = PropertykiFinances[_property];
    _mint(_property ,property.NetRentyear );
  }

  function minttheTokenRentpermonth(address _property) public {
    PropertyFinances storage property = PropertykiFinances[_property];
    _mint(_property ,property.NetRentmonth );
  }


    // function setStakeHolders() public {
    //     require(msg.sender == owner);
    //     stakeHolders[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2] = 4;
    //     castedVote[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2] = false;
    //     stakeHolders[0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db] = 4;
    //     castedVote[0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db] = false;
    // }



    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function viewOptions() public view returns (string[] memory) {
        return options;
    }

    function setOptions(string[] memory opt) public onlyOwner {
        options = opt;
        winnerList = new uint256[](options.length);
        // setStakeHolders();// Reset castedVote() array for a new vote agenda
    }

    function viewResult() public view onlyOwner returns (uint256[] memory) {
        return winnerList;
    }

    //function will be working after stakeholders are decided
    function castVote(uint256 choice) public {
        require(stakeHolders[msg.sender] >= 1);
        address holder = msg.sender;
        require(castedVote[holder] == false);
        winnerList[choice - 1] += 1;
        castedVote[holder] = true;
    }




}
