const StorageAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolCounter',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'decimal',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'network',
        type: 'string'
      }
    ],
    name: 'NewMeta',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'poolCounter',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalRaised',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endDate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256'
      },
      { indexed: false, internalType: 'address', name: 'ido', type: 'address' },
      { indexed: false, internalType: 'string', name: 'name', type: 'string' },
      {
        indexed: false,
        internalType: 'string',
        name: 'logoHash',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'infoHash',
        type: 'string'
      },
      { indexed: false, internalType: 'bool', name: 'isDeleted', type: 'bool' }
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
        name: 'poolCounter',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string[5]',
        name: 'social',
        type: 'string[5]'
      }
    ],
    name: 'NewSocials',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'poolId',
        type: 'uint256'
      },
      { indexed: false, internalType: 'bool', name: 'isDeleted', type: 'bool' }
    ],
    name: 'PoolStatus',
    type: 'event'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'poolId', type: 'uint256' }],
    name: 'getPoolStatus',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'totalRaised', type: 'uint256' },
          { internalType: 'uint256', name: 'startDate', type: 'uint256' },
          { internalType: 'uint256', name: 'endDate', type: 'uint256' },
          { internalType: 'uint256', name: 'price', type: 'uint256' },
          { internalType: 'uint256', name: 'decimal', type: 'uint256' },
          { internalType: 'string', name: 'network', type: 'string' },
          { internalType: 'address', name: 'ido', type: 'address' },
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'logoHash', type: 'string' },
          { internalType: 'string', name: 'infoHash', type: 'string' },
          { internalType: 'bool', name: 'isDeleted', type: 'bool' },
          {
            components: [
              { internalType: 'string', name: 'browser', type: 'string' },
              { internalType: 'string', name: 'telegram', type: 'string' },
              { internalType: 'string', name: 'discord', type: 'string' },
              { internalType: 'string', name: 'medium', type: 'string' },
              { internalType: 'string', name: 'twitter', type: 'string' }
            ],
            internalType: 'struct HoldexStorage.SocialLinks',
            name: 'social',
            type: 'tuple'
          }
        ],
        internalType: 'struct HoldexStorage.PoolReq',
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
    name: 'poolCounter',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'poolData',
    outputs: [
      { internalType: 'uint256', name: 'decimal', type: 'uint256' },
      { internalType: 'string', name: 'network', type: 'string' },
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'uint256', name: 'totalRaised', type: 'uint256' },
      { internalType: 'uint256', name: 'startDate', type: 'uint256' },
      { internalType: 'uint256', name: 'endDate', type: 'uint256' },
      { internalType: 'uint256', name: 'price', type: 'uint256' },
      { internalType: 'address', name: 'ido', type: 'address' },
      { internalType: 'string', name: 'logoHash', type: 'string' },
      { internalType: 'string', name: 'infoHash', type: 'string' },
      { internalType: 'bool', name: 'isDeleted', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_browser', type: 'string' }
    ],
    name: 'setBrowser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_discord', type: 'string' }
    ],
    name: 'setDiscord',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint256', name: '_endDate', type: 'uint256' }
    ],
    name: 'setEndDate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'address', name: '_ido', type: 'address' }
    ],
    name: 'setIdo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_infoHash', type: 'string' }
    ],
    name: 'setInfoHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'bool', name: '_isDeleted', type: 'bool' }
    ],
    name: 'setIsDeleted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_logoHash', type: 'string' }
    ],
    name: 'setLogoHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_medium', type: 'string' }
    ],
    name: 'setMedium',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_name', type: 'string' }
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint256', name: '_price', type: 'uint256' }
    ],
    name: 'setPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint256', name: '_startDate', type: 'uint256' }
    ],
    name: 'setStartDate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_telegram', type: 'string' }
    ],
    name: 'setTelegram',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'uint256', name: '_totalRaised', type: 'uint256' }
    ],
    name: 'setTotalRaised',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'poolId', type: 'uint256' },
      { internalType: 'string', name: '_twitter', type: 'string' }
    ],
    name: 'setTwitter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'socialData',
    outputs: [
      { internalType: 'string', name: 'browser', type: 'string' },
      { internalType: 'string', name: 'telegram', type: 'string' },
      { internalType: 'string', name: 'discord', type: 'string' },
      { internalType: 'string', name: 'medium', type: 'string' },
      { internalType: 'string', name: 'twitter', type: 'string' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
export default StorageAbi
