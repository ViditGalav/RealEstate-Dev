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



constructor() ERC20("RealEstateToken", "RET") {}

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

}