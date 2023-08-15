// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <=0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

using SafeMath for uint256;

contract RealEstate is ERC20 {
    struct PropertyFinances {
        uint256 Tokenprice;
        uint256 TokensNumbers;
        uint256 MonthlyCosts;
        uint256 NetRentyear;
        uint256 NetRentmonth;
        uint256 TotalInvestment;
        uint256 Interiorsize;
        uint256 Bedroom;
        uint256 Bathroom;
        uint256 LotSizeinsqft;
    }

    struct PropertyDetails {
        string Fulladress;
        string PropertyManager;
        uint256 OfferingPercent;
    }

    address public owner;
    address public tenant;
    uint public rentcollected;
    uint256 public depositAmount = 1 ether;

    mapping(address => PropertyFinances) public PropertykiFinances;
    mapping(address => PropertyDetails) public PropertykiDetails;
    mapping(address => bool) public hasPaidSecurityDeposit;

    constructor() ERC20("RealEstateToken", "RET") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyTenant() {
        require(msg.sender == tenant, "Only the tenant can call this function");
        _;
    }

    function setTenant(address _tenant) public {
        tenant = _tenant;
    }

    function paySecurityDeposit() public payable onlyTenant {
        require(msg.value == depositAmount, "Deposit amount does not match");
        hasPaidSecurityDeposit[msg.sender] = true;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function payRent() public payable onlyTenant {
        rentcollected += msg.value;
    }

    function withdrawRent() public payable onlyOwner {
        require(rentcollected > 0, "No rent available to withdraw");
        payable(owner).transfer(rentcollected);
    }


    function DecideTokenprice(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        property.Tokenprice = property
            .Bedroom
            .add(property.Bathroom)
            .add(property.LotSizeinsqft)
            .add(property.Interiorsize);
    }

    function DecideTotalInvestment(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        property.TotalInvestment = property.Tokenprice * property.TokensNumbers;
    }

    function DecideNetRentyear(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        property.NetRentyear = property.TotalInvestment.mul(8).div(100);
    }

    function DecideNetRentmonth(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        property.NetRentmonth = property.NetRentyear.div(12);
    }

    function minttheTokenprice(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        _mint(_property, property.Tokenprice);
    }

    function minttheTokenInvestment(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        _mint(_property, property.TotalInvestment);
    }

    function minttheTokenRentperyear(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        _mint(_property, property.NetRentyear);
    }

    function minttheTokenRentpermonth(address _property) public {
        PropertyFinances storage property = PropertykiFinances[_property];
        _mint(_property, property.NetRentmonth);
    }
    
}
