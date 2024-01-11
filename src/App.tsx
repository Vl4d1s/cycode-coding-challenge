import { BrowserRouter } from "react-router-dom";

import Layout from "./components/layout/layout";
import Routes from "./routes/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}
