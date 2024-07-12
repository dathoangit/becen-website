import {BigNumber, ethers} from "ethers";

export const hexToAscii = (str1: string) => {
  const hex = str1.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};


export const shortAddress = (account: string) => {
  return `${account.slice(0, 6)}...${account.slice(-4)}`;
};
export const shortAddressV2 = (account: string, slice = 6) => {
  return `${account.slice(0, slice)}...${account.slice(-slice)}`;
};

export const weiToNumber = (wei: any, decimal = 18) => {
  if (!wei || !Number(wei)) return '0';
  wei = wei.toString();
  return ethers.utils.formatUnits(wei, decimal);
};

export const formatFloat = (number: any, decimal = 2) => {
  number = number.toString();
  const arr = number.split('.');
  if (arr.length > 1) {
    arr[1] = arr[1].slice(0, decimal);
  }
  return arr.join('.');
};

export const numberToWei = (number: any, decimal = 18) => {
  number = number?.toString() || '0';

  const arr = number.split('.');
  if (arr[1] && arr[1].length > decimal) {
    arr[1] = arr[1].slice(0, decimal);
    number = arr.join('.');
  }

  return ethers.utils.parseUnits(number, decimal).toString();
};

export const bn = BigNumber.from;

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};