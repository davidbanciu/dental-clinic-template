import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter  } from 'react-router-dom'
import { LanguageProvider } from './context'
import { App } from './App'
import { applyTheme } from './theme'
import "./theme/theme.css";

applyTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter >
        <App />
      </HashRouter >
    </LanguageProvider>
  </StrictMode>,
)
