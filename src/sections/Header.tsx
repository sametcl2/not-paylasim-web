import { LogIn } from "lucide-react";
import { removeUser, selectIsAuthenticated } from "@/store/auth";
import { useDispatch, useSelector } from "@/store/setup/hooks";
import { removeUserFromLocalStorage } from "@/utils/authStorage";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import Button from "@/components/elements/button";

export const Header = () => {
  const [isAuthDialogVisible, setIsAuthDialogVisible] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const toggleAuthDialog = () => {
    setIsAuthDialogVisible(!isAuthDialogVisible);
  };

  const handleLogout = async () => {
    dispatch(removeUser());
    await removeUserFromLocalStorage();
    toggleAuthDialog();
  };

  return (
    <header className="sticky top-0 py-6 px-20">
      <div className="flex justify-between items-center">
        <h4>Not Paylaşım</h4>
        {isAuthenticated ? (
          <Button onClick={handleLogout}>Oturumunu Kapat</Button>
        ) : (
          <>
            <div className="hidden md:block">
              <Button onClick={toggleAuthDialog}>Giriş Yap</Button>
            </div>
            <div className="md:hidden">
              <Button onClick={toggleAuthDialog}>
                <LogIn />
              </Button>
            </div>
            <AuthModal
              isVisible={isAuthDialogVisible}
              onHide={() => setIsAuthDialogVisible(false)}
            />
          </>
        )}
      </div>
    </header>
  );
};
