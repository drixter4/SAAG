import { BrowserRouter } from "react-router-dom";
import  AppRouter  from "./Router/Rounter";


export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
