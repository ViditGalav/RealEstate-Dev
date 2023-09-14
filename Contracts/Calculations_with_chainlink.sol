// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <=0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.9/interfaces/AggregatorV3Interface.sol"; // Import Chainlink Aggregator Interface



using SafeMath for uint256;

contract  Calculations{

address public owner; 
PropertyToken public propertytoken;

    // Chainlink Aggregator addresses for external data
    address public bedroomOracleAddress = 0x0000;
    address public bathroomOracleAddress= 0x0000;
    address public lotSizeOracleAddress= 0x0000;
    address public interiorSizeOracleAddress= 0x0000;

    // Chainlink Aggregator instances
    AggregatorV3Interface private bedroomOracle;
    AggregatorV3Interface private bathroomOracle;
    AggregatorV3Interface private lotSizeOracle;
    AggregatorV3Interface private interiorSizeOracle;

    constructor(
        address _bedroomOracle,
        address _bathroomOracle,
        address _lotSizeOracle,
        address _interiorSizeOracle,
        address _propertyTokenAddress
    ) {
        owner = msg.sender;
        bedroomOracleAddress = _bedroomOracle;
        bathroomOracleAddress = _bathroomOracle;
        lotSizeOracleAddress = _lotSizeOracle;
        interiorSizeOracleAddress = _interiorSizeOracle;
        bedroomOracle = AggregatorV3Interface(_bedroomOracle);
        bathroomOracle = AggregatorV3Interface(_bathroomOracle);
        lotSizeOracle = AggregatorV3Interface(_lotSizeOracle);
        interiorSizeOracle = AggregatorV3Interface(_interiorSizeOracle);
        propertytoken = PropertyToken(_propertyTokenAddress);
    }

    // Fetch data from Chainlink oracle for bedroom
    function getBedroomPrice() internal view returns (uint256) {
        (, int256 price, , , ) = bedroomOracle.latestRoundData();
        require(price > 0, "Bedroom price not available");
        return uint256(price);
    }

    // Fetch data from Chainlink oracle for bathroom
    function getBathroomPrice() internal view returns (uint256) {
        (, int256 price, , , ) = bathroomOracle.latestRoundData();
        require(price > 0, "Bathroom price not available");
        return uint256(price);
    }

    // Fetch data from Chainlink oracle for lotSizeinsqft
    function getLotSizePrice() internal view returns (uint256) {
        (, int256 price, , , ) = lotSizeOracle.latestRoundData();
        require(price > 0, "Lot size price not available");
        return uint256(price);
    }

    // Fetch data from Chainlink oracle for interiorsize
    function getInteriorSizePrice() internal view returns (uint256) {
        (, int256 price, , , ) = interiorSizeOracle.latestRoundData();
        require(price > 0, "Interior size price not available");
        return uint256(price);
    }

    function DecideTokenprice(uint _propertyID) public {
        PropertyToken.Property memory property = propertytoken.getproperty(_propertyID);

        // Fetch data for each attribute from Chainlink oracles
        uint256 bedroomPrice = getBedroomPrice();
        uint256 bathroomPrice = getBathroomPrice();
        uint256 lotSizePrice = getLotSizePrice();
        uint256 interiorSizePrice = getInteriorSizePrice();

        // Calculate Tokenprice based on fetched data
        property.Tokenprice = bedroomPrice + bathroomPrice + lotSizePrice + interiorSizePrice;

        // Update property information in PropertyToken contract
        propertytoken.updateProperty(_propertyID, property);
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
