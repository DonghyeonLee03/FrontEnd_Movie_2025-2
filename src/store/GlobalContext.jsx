import { GlobalContext } from "../context/context";
import GenreProvider from "./GenreContext";
import MyChoiceProvider from "./MyChoiseContext";
import { useState } from "react";

export default function GlobalProvider({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <GlobalContext.Provider value={{ login, setLogin }}>
      <GenreProvider>
        <MyChoiceProvider>{children}</MyChoiceProvider>
      </GenreProvider>
    </GlobalContext.Provider>
  );
}
