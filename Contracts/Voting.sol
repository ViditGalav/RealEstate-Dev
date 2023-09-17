 // SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <=0.9.0;
import "./RET.sol";



contract Voting {

string[] public options;
uint[] public winnerList;
address public owner;

modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

modifier onlyTokenHolder() {
    require(RETToken(address(this)).balanceOf(msg.sender) > 0, "You must be a token holder of RET to access this functionality");
    _;
}

    function viewOptions() public view returns (string[] memory) {
        return options;
    }

    function setOptions(string[] memory opt) public onlyOwner {
        options = opt;
        winnerList = new uint[](options.length);
        // setStakeHolders();// Reset castedVote() array for a new vote agenda
    }

    function viewResult() public view onlyOwner returns (uint[] memory)  {
        return winnerList;
    }

    //function will be working after stakeholders are decided
    function castVote(uint256 choice) public onlyTokenHolder {
        require(stakeHolders[msg.sender] >= 1);
        address holder = msg.sender;
        require(castedVote[holder] == false);
        winnerList[choice - 1] += 1;
        castedVote[holder] = true;
    }




// OR 
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

    function vote(bool _supportDecision) public onlyTokenHolder {

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

    function getResult() external onlyOwner view returns (string memory) {
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

 