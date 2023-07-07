import React from 'react'
import { composeProviders } from '@docusaurus/theme-common'
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider
} from '@docusaurus/theme-common/internal'
import { ColorProvider } from '../../Contexts/color'
const Provider = composeProviders([
  ColorProvider,
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider
])
export default function LayoutProvider({ children }) {
  return <Provider>{children}</Provider>
}
