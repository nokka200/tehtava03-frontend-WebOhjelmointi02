import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UrheilijaProvider } from './context/UrheilijaContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UrheilijaProvider>
      <App />
    </UrheilijaProvider>
  </StrictMode>,
)
