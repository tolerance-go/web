# web3

Some knowledge points and small applications of web3

关于 web3 的一些知识点和小应用

---

## web3

- https://wtf.academy 是一个面向 Web2 开发者的 Web3 开源学院
- [vyper](https://github.com/vyperlang/vyper) 是面向 EVM 的 Python 版智能合约语言
- ethers.js 库旨在成为一个完整而紧凑的库，用于与以太区块链及其生态系统进行交互。它最初是为与 ethers.io 一起使用而设计的，后来扩展为一个更通用的库。
  - 它的官网文档地址是[这里](https://docs.ethers.org/v5/)，中文文档地址是[这里](https://learnblockchain.cn/ethers_v5/)
- ZK，有效性证明，也称为零知识证明，是一种交易验证方法，发生在证明者（为某些信息创建证明的人）和验证者之间，验证者在不共享任何信息的情况下验证证明他们俩。
- Sidechains 侧链是与父区块链（也称为主网）相邻工作的独立链。他们有一个核心任务——解决目前阻碍区块链成为主流技术的可扩展性难题。
- 加密货币 Crypto 是 cyptocurrency 的简称，是一种基于加密技术的数字货币新形式
- 区块链是一个交易数据库，在网络中的众多计算机之间更新和共享。每次添加一组新交易时，即称为一个“区块”，区块链由此而得名。大多数区块链都是公有的，用户只能添加而不能删除数据。如果有人想更改系统上的任何信息或欺骗系统，那么他需要在网络中大多数计算机上都如此操作。那将是一个超级大工程。这使得已经建立的区块链（如以太坊）十分安全。
- DeFi 的全称是 Decentralized Finance，即“去中心化金融”，也被称为“开放式金融”
- 以太坊与比特币有什么不同？
  - 以太坊立足比特币创新之上，两者都允许你使用数字货币，而无需支付服务提供商或银行。但是以太坊是可编程的，所以你还可以在以太坊网络上构建和部署去中心化应用程序。
- 稳定币是一种新型加密货币，依赖于更稳定的资产作为其价值基础。大多数稳定币都与美元挂钩，因而维持其货币价值。这样一个非常便宜且稳定的全球支付系统应运而生。当前许多稳定币都构建在以太坊网络上。

### solidity

- ABI 是 Application Binary Interface 的简称
- Gas 是指在以太坊网络上执行特定操作所需的计算工作量
  - 以太坊网络上的每个操作都需要一定数量的算力。这些费用用以太币支付。这意味着你至少需要少量以太币才能使用该网络。
- EVM 是以太坊虚拟机
- Solidity 中的事件（event）是 EVM 上日志的抽象
- Solidity 是以太坊虚拟机（EVM）智能合约的语言

- OppenZepplin 是一个维护 solidity 标准化代码库的组织
  - 他的 Ownable 标准实现如下：
    https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

## chart

- DAG（Directed Acyclic Graph）是有向无环图

## articles

- [How Ethereum Layer 2 scaling solutions address barriers to enterprises building on Mainnet 以太坊第 2 层扩展解决方案如何解决企业在主网上构建的障碍](https://tolerance-go.github.io/web3/articles/how-ethereum-layer-2-scaling-solutions-address-barriers-to-enterprises-building-on-mainnet)

---

建议安装[此插件](https://marketplace.visualstudio.com/items?itemName=george-alisson.html-preview-vscode)，在 vscode 中查看 maps/articles 中内容
