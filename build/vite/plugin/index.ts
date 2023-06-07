import type { PluginOption } from 'vite'

import react from '@vitejs/plugin-react'
import windiCSS from 'vite-plugin-windicss'

import { configMockPlugin } from './mock'

export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const vitePlugins: PluginOption | PluginOption[] = [react(), windiCSS()]

  VITE_USE_MOCK && vitePlugins.push(configMockPlugin())

  return vitePlugins
}
