
import { AuthProvider } from "./Auth/context/AuthProvider";
import AppRoute from "./router/AppRoute";

function App() {
  

  return (
    <div className="App">
      <AuthProvider>
      <AppRoute/>
      </AuthProvider>
      
      
    </div>
  )
}

export default App
