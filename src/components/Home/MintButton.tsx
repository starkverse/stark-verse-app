import { useAccount } from "@starknet-react/core";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Provider, Contract } from "starknet";
import abi from "@/common/abi.json";
import Button from "../Button";

const contractMap: any = {
  // 'SN_MAIN': {
  //   network: 'mainnet-alpha',
  //   contractAddress: '',
  // },
  SN_GOERLI: {
    network: "goerli-alpha",
    contractAddress:
      "0x075cca7baf8b5985c16a44092c492c28f76e2c617324dc0ab7d1d499c5d47161",
  },
};
const CollectButton = () => {
  const { address, connector, account } = useAccount();

  const mint = async () => {
    try {
      if (!address) {
        throw Error("Please connect wallet.");
      }
      const chainId: any = get(connector, "_wallet.chainId", "");
      const chain = contractMap[chainId];
      if (!chain) {
        if(chainId === 'SN_MAIN') {
          throw Error("Unsupported network.");
        } else {
          throw Error("Unsupported network.");
        }
      }
      const provider = new Provider({ sequencer: { network: chain.network } });
      const contract = new Contract(abi, chain.contractAddress, provider);
      if (!account) {
        throw Error("Please connect wallet.");
      }
      contract.connect(account);
      const result = await contract.publicMint(address);
      toast.success("Mint transaction sent successfully");
      await provider.waitForTransaction(result.transaction_hash);
      toast.success("Genesis Gallery NFT mint success！");
    } catch (e: any) {
      toast.error(e.reason || e.message);
    }
  };
  return (
    <Button
      circle
      type="primary-out"
      size="lg"
      className="!px-10 font-bold"
      onClick={mint}
    >
      Genesis Gallery Mint
    </Button>
  );
};

export default CollectButton;
