import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
}

export default App;
