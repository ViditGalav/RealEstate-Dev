// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./Calculations.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract PropertyToken is  ERC1155, Ownable {
   // PropertyToken public propertyToken;
    uint256 public propertyIdCounter;

    constructor(string memory uri) ERC1155(uri) {
        propertyIdCounter = 1; // Initialize property ID counter
    }



struct Property {
        uint Tokenprice;
        uint TokensNumbers;
        uint MonthlyCosts;
        uint NetRentyear;
        uint NetRentmonth;
        uint TotalInvestment;
        uint256 propertyId;
        uint256 interiorsize;
        uint256 bedroom;
        uint256 bathroom;
        uint256 lotSizeinsqft;
        string fullAddress;
        string propertyManager;
        uint256 offeringPercent;
        address owner;
    }

mapping(uint256 => Property) public properties;


 modifier onlyPropertyOwner(uint256 _propertyId) {
        require(properties[_propertyId].owner == msg.sender, "You are not the property owner");
        _;
    }



    function registerProperty(
        uint256 _interiorsize,
        uint256 _bedroom,
        uint256 _bathroom,
        uint256 _lotSizeinsqft,
        string memory _fullAddress,
        string memory _propertyManager,
        uint256 _offeringPercent
    ) public {
        uint256 propertyId = propertyIdCounter++;

        properties[propertyId] = Property({
            propertyId: propertyId,
            interiorsize: _interiorsize,
            bedroom: _bedroom,
            bathroom: _bathroom,
            lotSizeinsqft: _lotSizeinsqft,
            fullAddress: _fullAddress,
            propertyManager: _propertyManager,
            offeringPercent: _offeringPercent,
            owner: msg.sender
            
        });

        // Generate Token Data for the property
        bytes memory tokenData = abi.encode(
            _fullAddress,
            _propertyManager,
            _offeringPercent,
            msg.sender,
            _interiorsize,
            _bedroom,
            _bathroom,
            _lotSizeinsqft
        );

        // Mint ERC1155 tokens for the property
        _mint(msg.sender, propertyId, 1, tokenData);
    }

    function modifyProperty(
        uint256 _propertyId,
        uint256 _interiorsize,
        uint256 _bedroom,
        uint256 _bathroom,
        uint256 _lotSizeinsqft,
        string memory _fullAddress,
        string memory _propertyManager,
        uint256 _offeringPercent
    ) public onlyPropertyOwner(_propertyId) {
        Property storage property = properties[_propertyId];

        property.interiorsize = _interiorsize;
        property.bedroom = _bedroom;
        property.bathroom = _bathroom;
        property.lotSizeinsqft = _lotSizeinsqft;
        property.fullAddress = _fullAddress;
        property.propertyManager = _propertyManager;
        property.offeringPercent = _offeringPercent;
    }

    function removeProperty(uint256 _propertyId) public onlyPropertyOwner(_propertyId) {
        delete properties[_propertyId];

        // Burn ERC1155 tokens for the property
        _burn(msg.sender, _propertyId, 1);
    }

    function getproperty(uint _propertyID) public returns(Property memory){
      return properties[_propertyID];
    }
}
/*contract PropertyToken is ERC1155 {



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
        address Propertyowner;
    }




/*
mapping (uint =>(address=> PropertyFinances ) public Propertyfinanacemap ;
mapping (uint => PropertyDetails ) public PropertyDetailsmap ;


uint TokenIDCounter =1;

 constructor(address Propertyowner) ERC1155("https://example.com/api/token/{id}.json") {
        Propertyowner = msg.sender;
        
        
    }

    function CreatePrpertyToken(uint _amount, string memory _PropertyName) public  returns (uint) {
       uint TokenID = TokenIDCounter;
        TokenIDCounter++;
        

        _mint(msg.sender, TokenID, _amount, "");

    }


    function GetPropertyDetails(uint _TokenID, string memory Propertyfinanacemap ,string memory  PropertyDetailsmap ) public  {
       PropertyFinances storage Property = Propertyfinanacemap[_TokenID];
       
       
       
       
        bytes memory Tokendata = abi.encode( Propertyfinanacemap , PropertyDetailsmap,
        Property.Tokenprice,
        Property.TotalInvestment,
        Property.NetRentyear,
        Property.NetRentmonth);
    }









  function minttheTokenprice(uint _TokenID) public {
    PropertyFinances storage property = Propertyfinanacemap[_TokenID];
    _mint(_TokenID , property.Tokenprice);
  }


  function minttheTokenInvestment(uint _TokenID) public {
    PropertyFinances storage property = Propertyfinanacemap[_TokenID];
    _mint(_TokenID ,property.TotalInvestment );
  }

  function minttheTokenRentperyear(uint _TokenID) public {
    PropertyFinances storage property = Propertyfinanacemap[_TokenID];
    _mint(_TokenID ,property.NetRentyear );
  }

  function minttheTokenRentpermonth(uint _TokenID) public {
    PropertyFinances storage property = Propertyfinanacemap[_TokenID];
    _mint(_TokenID ,property.NetRentmonth );
  }




}*/






