import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useCreateWorkspaceModal } from "../../store/use-create-workspace-modal";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspaces";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const { mutate } = useCreateWorkspace();

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const data = await mutate(
      {
        name: "Workspace 1",
      },
      {
        onSuccess: (data) => {},
        onError: (error) => {
          // Handle error
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className='space-y-4'>
          <Input
            value=''
            disabled={false}
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal', 'Home',"
            required
          />
          <div className='flex justify-end'>
            <Button disabled={false}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};


//2:28:51