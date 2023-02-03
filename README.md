# web

Some knowledge points, examples and resources about the web 

关于 web 的一些知识点，示例和资源

---

## State Manager

- [zustand](https://github.com/pmndrs/zustand) - 🐻 Bear necessities for state management in React

## Design Tools

- [spline](https://spline.design/) - a place to design and collaborate in 3D.
- [figma](https://www.figma.com/) - Build better products as a team. Design, prototype, and gather feedback all in one place with Figma.
- [framer](https://www.framer.com/) - Go from design to world-class site with Framer, the web builder for creative pros.

## web3

- [以太坊词汇表](https://ethereum.org/zh/glossary/)
- [以太坊开发者文档](https://ethereum.org/zh/developers/)
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

## DApp

- Metaverse 是一个 3D 的虚拟网络世界，你可以和其它数字化的对象互动。
- Blockchain 分布式数据库，数据被分成用密码学链接的 块。当新数据被推入区块链时，它会填充一个空块，该块进一步链接到其他块，创建一个按时间顺序排列的链。区块链中的数据不可逆操作，能永久保存，任何人都可以查看。
- Cryptocurrency 加密货币，去中心化的银行，每个人都能发币，安全、交易快。Crypto Wallet
- Metamask 流行的浏览器扩展和移动应用程序，充当加密钱包和 DApp 的网关。
- Miner 区块链中的节点。它是在交易过程中生成（将新记录插入到区块链中）。
- Gas Fee  用于测量在以太坊区块链上执行特定操作所需的计算工作量的单位。什么是 Gas？
- Token 数字令牌。
- NFT 数字资产。
- Smart contract 智能合约，存储在区块链中的去中心化程序。当参与者满足前提条件时调用。它类似于供应商的机器，买家插入卡付款时执行。它允许你选择所购买的饮料，并在饮料下发后将钱转给卖家。自动化、安全、快速。智能合约可以是任何服务：汇款、选举投票、改变财产归属等等。
- ICO 加密世界的 IPO。
- DApp 去中心化应用程序。
- DeFi 去中心化金融服务。
- DAO 去中心化自治组织。
- Consensus 去中心化的一组规则，规则达成前必须验证。
- Ethereum 一个在公共区块链网络中工作的开源软件平台，专注于运行 DApps 应用程序。
- EVM 用于执行智能合约。
- Solidity 编写智能合约的编程语言。
- Solana 解决可扩展性、交易速度、价格和能源效率等主要问题的区块链。

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

### big news

- 2022-9-15，以太坊经历了合并升级，从工作量证明过渡到权益证明。
  - 合并是以太坊规模最大的一次升级，将保护以太坊安全所需的能源消耗减少了 99.95%，同时创建一个更安全、碳成本更低的以太坊网络。以太坊现在成为一种低碳区块链，并且安全性和可扩展性得到增强。

## news channels

- [每周以太坊新闻](https://weekinethereumnews.com/)

## other

- DAG（Directed Acyclic Graph）是有向无环图

## articles

- [How Ethereum Layer 2 scaling solutions address barriers to enterprises building on Mainnet 以太坊第 2 层扩展解决方案如何解决企业在主网上构建的障碍](https://tolerance-go.github.io/web3/articles/how-ethereum-layer-2-scaling-solutions-address-barriers-to-enterprises-building-on-mainnet)

---

建议安装[此插件](https://marketplace.visualstudio.com/items?itemName=george-alisson.html-preview-vscode)，在 vscode 中查看 maps/articles 中内容
