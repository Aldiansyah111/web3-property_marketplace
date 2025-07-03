// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking {
    IERC20 public stakingToken;

    mapping(address => uint256) public balances;
    mapping(address => uint256) public stakeTimestamps;

    uint256 public rewardRate = 10; // reward dalam % per tahun

    constructor(address _token) {
        stakingToken = IERC20(_token);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount > 0");

        stakingToken.transferFrom(msg.sender, address(this), amount);

        balances[msg.sender] += amount;
        stakeTimestamps[msg.sender] = block.timestamp;
    }

    function withdraw() external {
        uint256 balance = balances[msg.sender];
        require(balance > 0, "No staked balance");

        uint256 stakedTime = block.timestamp - stakeTimestamps[msg.sender];
        uint256 reward = (balance * rewardRate * stakedTime) / (365 days * 100);

        stakingToken.transfer(msg.sender, balance + reward);

        balances[msg.sender] = 0;
        stakeTimestamps[msg.sender] = 0;
    }
}
