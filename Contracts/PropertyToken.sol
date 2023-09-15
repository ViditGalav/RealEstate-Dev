


// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./Calculations.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./MultipleimageIntegration.sol"; // Importing the MultipleimageIntegration contract

contract PropertyToken2 is ERC1155, Ownable {
    uint256 public propertyIdCounter;
    MultipleImages private imageIntegrationContract; // State variable to store the address of MultipleimageIntegration contract

    constructor(string memory uri, address _imageIntegrationAddress) ERC1155(uri) {
        propertyIdCounter = 1;
        imageIntegrationContract = MultipleImages(_imageIntegrationAddress); 
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

        
        string[] imageUrls;
    }

    mapping(uint256 => Property) public properties;

    modifier onlyPropertyOwner(uint256 _propertyId) {
        require(properties[_propertyId].owner == msg.sender, "You are not the property owner");
        _;
    }

    function registerProperty(
        uint256 _tokenprice,
        uint256 _tokenNumbers,
        uint _MonthlyCosts,
        uint _NetRentyear,
        uint _NetRentmonth,
        uint _TotalInvestment,
        uint256 _interiorsize,
        uint256 _bedroom,
        uint256 _bathroom,
        uint256 _lotSizeinsqft,
        string memory _fullAddress,
        string memory _propertyManager,
        uint256 _offeringPercent,
        string[] memory _imageUrls // Adding an array for storing image URLs
    ) public {
        uint256 propertyId = propertyIdCounter++;

        properties[propertyId] = Property({
            Tokenprice: _tokenprice,
            TokensNumbers: _tokenNumbers,
            MonthlyCosts: _MonthlyCosts,
            NetRentyear: _NetRentyear,
            NetRentmonth: _NetRentmonth,
            TotalInvestment: _TotalInvestment,
            propertyId: propertyId,
            interiorsize: _interiorsize,
            bedroom: _bedroom,
            bathroom: _bathroom,
            lotSizeinsqft: _lotSizeinsqft,
            fullAddress: _fullAddress,
            propertyManager: _propertyManager,
            offeringPercent: _offeringPercent,
            owner: msg.sender,
            imageUrls: _imageUrls // Assign image URLs
        });

        // Generating Token Data for the property including image URLs
        bytes memory tokenData = abi.encode(
            _tokenprice,
            _tokenNumbers,
            _MonthlyCosts,
            _NetRentyear,
            _NetRentmonth,
            _TotalInvestment,

            _fullAddress,
            _propertyManager,
            _offeringPercent,
            msg.sender,
            _interiorsize,
            _bedroom,
            _bathroom,
            _lotSizeinsqft,
            _imageUrls // image URLs
        );

        
        _mint(msg.sender, propertyId, 1, tokenData);
    }

    
    function mintkaro(uint256 _propertyId, string[] memory _imageUrls) public onlyPropertyOwner(_propertyId) {
        require(_imageUrls.length > 0, "At least one image URL must be provided");

        
        imageIntegrationContract.mintkaro(msg.sender, _propertyId, _imageUrls);
    }

    function getproperty(uint _propertyID) public returns(Property memory) {
        return properties[_propertyID];
    }
}







