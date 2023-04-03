import { useConnectors } from '@starknet-react/core';
import { useEffect } from 'react';
import Button from '../Button';
import Dialog from '../Dialog';

const Connect = () => {
  const { connect, connectors, refresh } = useConnectors();

  useEffect(() => {
    const interval = setInterval(refresh, 10000);
    return () => clearInterval(interval)
  }, [refresh]);

  const doClick = (connector: any) => {
    if(connector.available()) {
      connect(connector);
    }
  }
  return (
    <Dialog
      title='Connect Wallet'
      button={
        <Button circle type='primary'>
          Connect Wallet
        </Button>
      }
    >
      {connectors.map((connector: any) => (
        <div key={connector.id()} className='mt-4'>
          <Button className='w-full !rounded-xl' disabled={!connector.available()} onClick={() => doClick(connector)}>
            Connect {connector.id()}{!connector.available() && '(disabled)'}
          </Button>
        </div>
      ))}
    </Dialog>
  )
}

export default Connect;