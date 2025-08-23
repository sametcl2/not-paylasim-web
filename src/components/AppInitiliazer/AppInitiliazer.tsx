import { ProtectedRoute } from "@/components/ProtectedRoute";
import { CreateNote } from "@/pages/CreateNote";
import { Home } from "@/pages/Home";
import { Note } from "@/pages/Note";
import NotFound from "@/pages/NotFound";
import { Profile } from "@/pages/Profile";
import { Search } from "@/pages/Search";
import { Header } from "@/sections/Header";
import { setUser } from "@/store/auth";
import { useDispatch } from "@/store/setup/hooks";
import { getUserFromLocalStorage } from "@/utils/authStorage";
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
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
