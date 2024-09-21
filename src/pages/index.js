import * as React from "react"

//Header & Footer
import Header from './Components/Header';
import Footer from './Components/Footer';

//Landing Page
import Home from './Components/Home';

function App({ children }) {
  return (
    <>
      <Header />
      <main>
        {children || <Home />}  {/* Render children if present, otherwise render Home */}
      </main>
      <Footer />
    </>
  );
}

export default App