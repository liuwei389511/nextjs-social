"use client";

import Image from "next/image";
import {
  useConnect,
  useDisconnect,
  useAccount,
  useBalance,
  useChainId,
  useSwitchChain,
} from "wagmi";
import { metaMask } from "wagmi/connectors";
import { useEffect, useState } from "react";
import { sepolia, mainnet } from "viem/chains";

const WalletConnect = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const [isClient, setIsClient] = useState(false);
  const [isWalletInfo, setIsWalletInfo] = useState(false);
  const [isNetWork, setIsNetWork] = useState(false);
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { data: balance, isLoading: balanceLoading } = useBalance({
    address: address,
  });

  useEffect(() => {
    setIsClient(true);
    setIsWalletInfo(true);
    setIsNetWork(true);
  }, []);

  const handleConnect = () => {
    connect({ connector: metaMask() });
  };
  const handleDisconnect = () => {
    disconnect();
  };

  const getSwitchChain = () => {
    console.log("Current chainId:", chainId);
    switch (chainId) {
      case mainnet.id:
        return {
          name: "Ethereum Mainnet",
          color: "bg-green-500, text-green-800",
        };
      case sepolia.id:
        return {
          name: "Sepolia Testnet",
          color: "bg-blue-500, text-blue-800",
        };
      default:
        return {
          name: "Unknown Network",
          color: "bg-gray-500, text-gray-800",
        };
    }
  };
  const network = getSwitchChain();
  return (
    <div className="flex items-center gap-6">
      {isNetWork && isConnected && (
        <>
          <div className="flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Network:
            </label>
            <div className="text-sm font-semibold">
              <span>{network?.name}</span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Chain ID:
            </label>
            <div className="text-sm font-semibold">
              <span> {chainId}</span>
            </div>
          </div>
        </>
      )}

      {/* 余额 */}
      {isWalletInfo && isConnected && (
        <div className="flex flex-col items-start">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Balance:
          </label>
          <div className="text-sm font-semibold">
            {balanceLoading ? (
              <span className="text-gray-500">加载中...</span>
            ) : (
              <span>
                {balance
                  ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}`
                  : " 0 ETH"}
              </span>
            )}
          </div>
        </div>
      )}

      {isClient && isConnected ? (
        <div className="flex items-center gap-4">
          <div className="flex flex-col  text-sm text-blue-600">
            <div className="block text-sm font-medium text-gray-400 mb-1">
              Address:
            </div>
            {address?.slice(0, 6)}...{address?.slice(-6)}
          </div>
          <button
            onClick={handleDisconnect}
            className=" px-3 py-1 text-sm bg-red-500 
  text-white rounded-md hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          className="flex items-center gap-2 px-3 py-1 text-sm cursor-pointer text-blue-400 hover:text-blue-500 rounded-md"
          onClick={handleConnect}
        >
          <Image src="/wallet.png" alt="" width={20} height={20} />
          Use Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
