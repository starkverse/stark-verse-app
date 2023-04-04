import { useContext } from 'react';
import Button from '../Button';
import Dialog from '../Dialog';
import { AccountContext } from '../AccountProvider';

const Connect = () => {
  const { doConnect, connectors } = useContext(AccountContext);

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
          <Button className='w-full !rounded-xl capitalize' disabled={!connector.available()} onClick={() => doConnect(connector)}>
            Connect {connector.id()}{!connector.available() && '(disabled)'}
          </Button>
        </div>
      ))}
    </Dialog>
  )
}

export default Connect;