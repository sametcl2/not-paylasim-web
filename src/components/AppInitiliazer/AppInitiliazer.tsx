import { Home } from "@/pages/Home";
import { Note } from "@/pages/Note";
import NotFound from "@/pages/NotFound";
import { Search } from "@/pages/Search";
import { Dashboard } from "@/pages/Dashboard";
import { AddNote } from "@/pages/AddNote";
import { Header } from "@/sections/Header";
import { setUser } from "@/store/auth";
import { useDispatch } from "@/store/setup/hooks";
import { getUserFromLocalStorage } from "@/utils/authStorage";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useEffect } from "react";
import { Route, Routes } from "react-router";

export const AppInitializer = () => {
  const dispatch = useDispatch();

  const getSavedUser = async () => {
    const { user, accessToken, refreshToken } = getUserFromLocalStorage();

    if (user && accessToken && refreshToken) {
      dispatch(setUser({ user, accessToken, refreshToken }));
    }
  };

  useEffect(() => {
    getSavedUser();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/note/:id" element={<Note />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
