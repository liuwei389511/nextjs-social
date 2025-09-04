import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia], //支持主网和测试链
  connectors: [
    injected(), //注入连接器（检查浏览器中的钱包）
    metaMask(), //连接metaMask钱包
  ],
  transports: {
    [mainnet.id]: http(), //使用HTTP传输
    [sepolia.id]: http(), //使用HTTP传输
  },
});
