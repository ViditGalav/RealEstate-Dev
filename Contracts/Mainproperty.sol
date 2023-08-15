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


// adding parameters in constructor for voting function also
constructor(string memory _decision) ERC20("RealEstateToken", "RET") {
  owner = msg.sender;
  decision = _decision;
  isVotingOpen = true;
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



    //code for voting for the stakeholders
    //address public owner;
    string public decision;
    uint public yesVotes;
    uint public noVotes;
    bool public isVotingOpen;


    mapping(address => uint) public stakeHolders;

    mapping(address => bool) public hasVoted;

    mapping(address => bool) public castedVote;

    
    //already used constructor 
    /* constructor(string memory _decision){
        owner = msg.sender;
        decision = _decision;
        isVotingOpen = true;
    }*/

    function setStakeHolders(address _address, uint _stakeNo) public {
        require(msg.sender == owner,"You are not the owner");
        stakeHolders[_address] = _stakeNo;
    }

    function vote(bool _supportDecision) public {

        require(stakeHolders[msg.sender] >= 1, "You don't have enough stakes");
        require(hasVoted[msg.sender] == false, "You have already voted");

        hasVoted[msg.sender] = true;

        if (_supportDecision) {
            yesVotes++;
        } else {
            noVotes++;
        }

    }

    function closeVoting() public {
        require(msg.sender == owner);
        isVotingOpen = false;
    }

    function getResult() external view returns (string memory) {
        require(!isVotingOpen, "Voting is still open");
        
        if (yesVotes > noVotes) { 
            return "Decision is approved";
        } else if (noVotes > yesVotes) {
            return "Decision is rejected";
        } else {
            return "Decision is tied";
        }
    }

    function getVoteCount() external view returns (uint256 yes, uint256 no) {
        return (yesVotes, noVotes);
    }


}