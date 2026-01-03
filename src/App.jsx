import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";
import ResumeGeneratorPage from "./pages/ResumeGeneratorPage";
import Form from "./components/Form";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/resumegenerator" element={<ResumeGeneratorPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/edit" element={<Edit/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
