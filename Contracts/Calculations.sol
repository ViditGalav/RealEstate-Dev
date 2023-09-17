// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <=0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./PropertyToken.sol";

using SafeMath for uint256;
contract  Calculations{

address public owner; 
PropertyToken public propertytoken;

 function DecideTokenprice(uint _propertyID)public {
 PropertyToken.Property memory property = propertytoken.getproperty(_propertyID);
  property.Tokenprice=property.bedroom.add(property.bathroom)
  .add(property.lotSizeinsqft).add(property.interiorsize);

  }


 
 function DecideTotalInvestment(uint _propertyID) public  {
 PropertyToken.Property memory property = propertytoken.getproperty(_propertyID);
 property.TotalInvestment=property.Tokenprice*property.TokensNumbers;
  
 }

function DecideNetRentyear(uint _propertyID) public {
   PropertyToken.Property memory property = propertytoken.getproperty(_propertyID);
    property.NetRentyear=property.TotalInvestment.mul(8).div(100);
   
}


function DecideNetRentmonth(uint _propertyID) public {
  PropertyToken.Property memory property = propertytoken.getproperty(_propertyID);
  property.NetRentmonth = property.NetRentyear.div(12);
 
}

}

