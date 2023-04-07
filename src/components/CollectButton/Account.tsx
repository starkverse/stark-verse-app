import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ArrowRightOnRectangleIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { formatStr } from '@/utils/util';
import Menu from '../Menu';
import { AccountContext } from '../AccountProvider';
import { contractMap } from '../Page/Home/MintButton';

const Account = ({ address, chainId }: any) => {
  const { push } = useRouter();
  const { disconnect } = useContext(AccountContext);
  const goVerse = () => {
    push('/gallery');
  }
  const formatChainId = (val = '') => {
    const v = contractMap[val]?.network || '';
    return v.slice(0, v.indexOf('-'));
  }
  return (
    <Menu 
      title={<div>
        <span className='capitalize'>{formatChainId(chainId)}</span>
        <span className='mx-2'>|</span>
        {formatStr({ value: address })}
      </div>}
      navs={[
        {
          label: 'StarkVerse Gallery',
          icon: <BanknotesIcon width={20} />,
          onClick: goVerse,
        },
        {
          label: 'Logout',
          icon: <ArrowRightOnRectangleIcon width={20} />,
          onClick: disconnect,
        },
      ]}
    />
  )
}

export default Account;