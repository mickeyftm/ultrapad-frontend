;[
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64'
      },
      { indexed: false, internalType: 'string', name: 'status', type: 'string' }
    ],
    name: 'Bidder',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      { indexed: true, internalType: 'uint64', name: 'userId', type: 'uint64' },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96'
      }
    ],
    name: 'CancellationSellOrder',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      { indexed: true, internalType: 'uint64', name: 'userId', type: 'uint64' },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96'
      }
    ],
    name: 'ClaimedFromOrder',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: '_poolingToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: '_biddingToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'orderCancellationEndDate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'poolStartDate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'poolEndDate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'userId',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: '_pooledSellAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: '_minBuyAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumBiddingAmountPerOrder',
        type: 'uint256'
      },
      { indexed: false, internalType: 'bytes', name: 'hash', type: 'bytes' }
    ],
    name: 'NewPool',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      { indexed: true, internalType: 'uint64', name: 'userId', type: 'uint64' },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'buyAmount',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'sellAmount',
        type: 'uint96'
      }
    ],
    name: 'NewSellOrder',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint64', name: 'userId', type: 'uint64' },
      {
        indexed: true,
        internalType: 'address',
        name: 'userAddress',
        type: 'address'
      }
    ],
    name: 'NewUser',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'soldPoolingTokens',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'soldBiddingTokens',
        type: 'uint96'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'clearingPriceOrder',
        type: 'bytes32'
      }
    ],
    name: 'PoolCleared',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string[6]',
        name: 'social',
        type: 'string[6]'
      }
    ],
    name: 'PoolDetails',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialsupply',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenPrice',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenVestion',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'hardCap',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'swapRate',
        type: 'uint256'
      }
    ],
    name: 'PoolMetaData',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint64', name: 'userId', type: 'uint64' }
    ],
    name: 'UserRegistration',
    type: 'event'
  },
  {
    inputs: [],
    name: 'FEE_DENOMINATOR',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'annexToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'bytes32[]', name: '_sellOrders', type: 'bytes32[]' }
    ],
    name: 'cancelSellOrders',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'orders', type: 'bytes32[]' }
    ],
    name: 'claimFromParticipantOrder',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sumPoolingTokenAmount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'sumBiddingTokenAmount',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'clearingPriceOrders',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'bytes32', name: 'order', type: 'bytes32' }
    ],
    name: 'containsOrder',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'documents',
    outputs: [
      { internalType: 'contract IDocuments', name: '', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'feeNumerator',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'feeReceiverUserId',
    outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllDocuments',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
    name: 'getDocument',
    outputs: [
      { internalType: 'string', name: '', type: 'string' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getDocumentCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
    name: 'getDocumentName',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'poolId', type: 'uint256' }],
    name: 'getSecondsRemainingInBatch',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'userId', type: 'uint256' }],
    name: 'getUserAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserId',
    outputs: [{ internalType: 'uint64', name: 'userId', type: 'uint64' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: 'title', type: 'string' },
      { internalType: 'string', name: 'description', type: 'string' },
      { internalType: 'string', name: 'accessType', type: 'string' },
      { internalType: 'string', name: 'tokenType', type: 'string' },
      { internalType: 'string', name: 'tokenListing', type: 'string' },
      { internalType: 'string', name: 'distribution', type: 'string' }
    ],
    name: 'hashPacked',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: '_poolingToken',
            type: 'address'
          },
          {
            internalType: 'contract IERC20',
            name: '_biddingToken',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'accessManagerContract',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'orderCancellationEndDate',
            type: 'uint256'
          },
          { internalType: 'uint256', name: 'poolStartDate', type: 'uint256' },
          { internalType: 'uint256', name: 'poolEndDate', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'minimumBiddingAmountPerOrder',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minFundingThreshold',
            type: 'uint256'
          },
          { internalType: 'uint96', name: '_pooledSellAmount', type: 'uint96' },
          { internalType: 'uint96', name: '_minBuyAmount', type: 'uint96' },
          {
            internalType: 'bool',
            name: 'isAtomicClosureAllowed',
            type: 'bool'
          },
          { internalType: 'bytes', name: 'hash', type: 'bytes' },
          {
            internalType: 'bytes',
            name: 'accessManagerContractData',
            type: 'bytes'
          },
          {
            components: [
              { internalType: 'string', name: 'website', type: 'string' },
              { internalType: 'string', name: 'description', type: 'string' },
              { internalType: 'string', name: 'telegram', type: 'string' },
              { internalType: 'string', name: 'discord', type: 'string' },
              { internalType: 'string', name: 'medium', type: 'string' },
              { internalType: 'string', name: 'twitter', type: 'string' }
            ],
            internalType: 'struct HoldexLaunchPad.PoolAbout',
            name: 'about',
            type: 'tuple'
          },
          {
            components: [
              { internalType: 'uint96', name: 'initialsupply', type: 'uint96' },
              { internalType: 'uint96', name: 'tokenPrice', type: 'uint96' },
              { internalType: 'uint96', name: 'tokenVestion', type: 'uint96' },
              { internalType: 'uint256', name: 'hardCap', type: 'uint256' },
              { internalType: 'uint256', name: 'swapRate', type: 'uint256' }
            ],
            internalType: 'struct HoldexLaunchPad.PoolReq3',
            name: 'Data',
            type: 'tuple'
          }
        ],
        internalType: 'struct HoldexLaunchPad.PoolReq',
        name: 'pool',
        type: 'tuple'
      }
    ],
    name: 'initiatePool',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'numUsers',
    outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint96[]', name: '_minBuyAmounts', type: 'uint96[]' },
      { internalType: 'uint96[]', name: '_sellAmounts', type: 'uint96[]' },
      { internalType: 'bytes32[]', name: '_prevSellOrders', type: 'bytes32[]' },
      { internalType: 'bytes', name: 'allowListCallData', type: 'bytes' }
    ],
    name: 'placeSellOrders',
    outputs: [{ internalType: 'uint64', name: 'userId', type: 'uint64' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint96[]', name: '_minBuyAmounts', type: 'uint96[]' },
      { internalType: 'uint96[]', name: '_sellAmounts', type: 'uint96[]' },
      { internalType: 'bytes32[]', name: '_prevSellOrders', type: 'bytes32[]' },
      { internalType: 'bytes', name: 'allowListCallData', type: 'bytes' },
      { internalType: 'address', name: 'orderSubmitter', type: 'address' }
    ],
    name: 'placeSellOrdersOnBehalf',
    outputs: [{ internalType: 'uint64', name: 'userId', type: 'uint64' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'poolAccessData',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'poolAccessManager',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'poolCounter',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'poolData',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: 'poolingToken',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: 'biddingToken',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'orderCancellationEndDate',
        type: 'uint256'
      },
      { internalType: 'uint256', name: 'poolEndDate', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'minimumBiddingAmountPerOrder',
        type: 'uint256'
      },
      { internalType: 'uint256', name: 'interimSumBidAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'feeNumerator', type: 'uint256' },
      { internalType: 'uint256', name: 'minFundingThreshold', type: 'uint256' },
      { internalType: 'bytes32', name: 'initialPoolOrder', type: 'bytes32' },
      { internalType: 'bytes32', name: 'interimOrder', type: 'bytes32' },
      {
        internalType: 'uint96',
        name: 'volumeClearingPriceOrder',
        type: 'uint96'
      },
      {
        internalType: 'bool',
        name: 'minFundingThresholdNotReached',
        type: 'bool'
      },
      { internalType: 'bool', name: 'isAtomicClosureAllowed', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint256', name: 'iterationSteps', type: 'uint256' }
    ],
    name: 'precalculateSellAmountSum',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'registerUser',
    outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
    name: 'removeDocument',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'string', name: '_name', type: 'string' },
      { internalType: 'string', name: '_data', type: 'string' }
    ],
    name: 'setDocument',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_document', type: 'address' }],
    name: 'setDocumentAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'newFeeNumerator', type: 'uint256' },
      {
        internalType: 'address',
        name: 'newfeeReceiverAddress',
        type: 'address'
      }
    ],
    name: 'setFeeParameters',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_threshold', type: 'uint256' }],
    name: 'setThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_treasury', type: 'address' }],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'poolId', type: 'uint256' }],
    name: 'settlePool',
    outputs: [
      { internalType: 'bytes32', name: 'clearingOrder', type: 'bytes32' }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint96[]', name: '_minBuyAmount', type: 'uint96[]' },
      { internalType: 'uint96[]', name: '_sellAmount', type: 'uint96[]' },
      { internalType: 'bytes32[]', name: '_prevSellOrder', type: 'bytes32[]' },
      { internalType: 'bytes', name: 'allowListCallData', type: 'bytes' }
    ],
    name: 'settlePoolAtomically',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'startingDate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'threshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'totalBiddingTokens',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'treasury',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
]
