import { Connector, useAccount, useConnectors } from '@starknet-react/core';
import React, { createContext, useEffect } from 'react';
import { AccountInterface } from 'starknet';

interface AccountProps {
  address?: string;
  account?: AccountInterface;
  connector?: Connector;
  connectors: Connector[];
  disconnect: () => void;
  doConnect: (connector: Connector) => void;
}
export const AccountContext = createContext<AccountProps>({
  connectors: [],
  disconnect: () => {},
  doConnect: () => {},
});

export const AccountProvider = ({ children }: any) => {
  const { account, address, connector } = useAccount();
  const { connect, connectors, disconnect, refresh } = useConnectors();

  const doConnect = (connector: Connector) => {
    if(connector.available()) {
      connect(connector);
    }
  }

  useEffect(() => {
    const interval = setInterval(refresh, 5000)
    return () => clearInterval(interval);
  }, [refresh])

  return (
    <AccountContext.Provider
      value={{
        address,
        account,
        connectors,
        connector,
        disconnect,
        doConnect,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
