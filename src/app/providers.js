"use client";

import * as React from "react";
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
    darkTheme,
} from "@rainbow-me/rainbowkit";

import {
    argentWallet,
    trustWallet,
    ledgerWallet,
    metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";

import {
    sepolia
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const { wallets } = getDefaultWallets();

export const config = getDefaultConfig({
    appName: "ens",
    projectId: "f7e2b61b81d1d06ac82c263a5de1b906",
    wallets: [
    ...wallets,
    {
        groupName: "Other",
        wallets: [argentWallet, trustWallet, ledgerWallet, metaMaskWallet],
    },
    ],
    chains: [
        sepolia
    ],
    ssr: true,
});

export const queryClient = new QueryClient();

export function Providers({ children }) {
    return (
        <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
        </QueryClientProvider>
        </WagmiProvider>
    );
}