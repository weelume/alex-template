'use client'
import { createContext, useContext, type ReactNode } from 'react'
import { brand, type Bilingual } from './config/brand'
export interface AlexHostConfig { brandName: Bilingual; logo?: string; lightLogo?: string; marketplaceHref?: string; marketplaceLabel?: Bilingual; marketplaceAriaLabel?: Bilingual; filing?: ReactNode }
const Context = createContext<AlexHostConfig>({ brandName: brand.name })
export function AlexHostProvider({ children, ...config }: AlexHostConfig & { children: ReactNode }) { return <Context.Provider value={config}>{children}</Context.Provider> }
export const useAlexHost = () => useContext(Context)
