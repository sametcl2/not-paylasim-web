import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md p-6">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold">Not Paylaşım</h1>
        <Dialog>
          <DialogTrigger>
            <Button
              variant="default"
              className="bg-blue-200 text-black rounded-4xl p-6"
            >
              Giriş Yap
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};
