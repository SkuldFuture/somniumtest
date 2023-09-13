
import { FavoritesPage, HistoryPage, MainPage } from "pages";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

export const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="history" element={<HistoryPage />} />
      </Route>
    </Routes>
  );
};
