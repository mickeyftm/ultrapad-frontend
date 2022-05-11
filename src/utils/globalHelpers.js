import { ethers } from 'ethers'
export function RPCConnector (a, b) {}
export function TimeConverter (UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000)
  let time = {}
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var hour = a.getHours()
  var min = a.getMinutes()
  // var sec = a.getSeconds()

  var time1 = date + ' ' + month + ' ' + year
  time.month = month
  time.hour = hour
  time.min = min
  time.date = date

  return time1
}

export async function FetchSigner (address, Abi) {
  if (window.ethereum !== undefined) {
    console.log('we are in fetch provider', Abi)
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = await provider.getSigner()

    var contract = new ethers.Contract(address, Abi, signer)
    return contract
  } else {
    console.log('Error Metamask is not installed')
  }
}
export function DefualtImageSetter (e) {
  e.target.src =
    'https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851'
}
export async function CustomRpcProvider (address, Abi, network) {
  const url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'

  const provider = new ethers.providers.JsonRpcProvider(url)
  console.log('provider', provider)
  // const signer0 = provider.getSigner(0);
  var contract = new ethers.Contract(address, Abi)
  return contract
}
