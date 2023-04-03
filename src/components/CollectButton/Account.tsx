import { ArrowRightOnRectangleIcon, RectangleGroupIcon } from '@heroicons/react/24/outline';
import { formatStr } from '@/utils/util';
import Menu from '../Menu';
import { useConnectors } from '@starknet-react/core';
import { toast } from 'react-toastify';

const Account = ({ address, chainId }: any) => {
  const { disconnect } = useConnectors();
  const goVerse = () => {
    toast.info('Coming Soon.', { icon: false });
  }
  const formatChainId = (val = '') => {
    return val.slice(3);
  }
  return (
    <Menu 
      title={<div>
        {formatChainId(chainId)}
        <span className='mx-2'>|</span>
        {formatStr({ value: address })}
      </div>}
      navs={[
        {
          label: 'Verse',
          icon: <RectangleGroupIcon width={20} />,
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