import Connect from './Connect';
import Account from './Account';
import { get } from 'lodash';
import { useContext } from 'react';
import { AccountContext } from '../AccountProvider';

const CollectButton = () => {
  const { address, connector } = useContext(AccountContext);
  const chainId = get(connector, '_wallet.chainId');
  
  return address ? <Account address={address} chainId={chainId} /> : <Connect />;
}

export default CollectButton;