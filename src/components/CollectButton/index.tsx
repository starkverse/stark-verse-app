import { useAccount } from '@starknet-react/core';
import Connect from './Connect';
import Account from './Account';
import { get } from 'lodash';

const CollectButton = () => {
  const { address, connector } = useAccount();
  const chainId = get(connector, '_wallet.chainId');
  return address ? <Account address={address} chainId={chainId} /> : <Connect />;
}

export default CollectButton;