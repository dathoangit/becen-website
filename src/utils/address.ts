export const shortAddress = (account: string, decimals: number = 6) =>
  `${account.slice(0, decimals)}...${account.slice(-decimals)}`;
