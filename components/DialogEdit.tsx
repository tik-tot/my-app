"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, Pencil1Icon } from "@radix-ui/react-icons";
import "./styles/dialogStyles.css";
import type { User } from "@prisma/client";
import AdminToggleSwitch from "@/app/authPage/adminMgt/components/AdminToggleSwitch";

type UserProps = User & { isAdmin: Boolean };

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const DialogEdit = ({ user }: { user: UserProps }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <Pencil1Icon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            Edit User {user.name}
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Update user data. Click save when done.
          </Dialog.Description>
          <div className="mt-4">
          <form
            onSubmit={(event) => {
              // wait().then(() => setOpen(false));
              event.preventDefault();
            }}
          >
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input className="Input" id="name" defaultValue={user?.name!} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="email">
                Username
              </label>
              <input
                className="Input"
                id="username"
                disabled
                value={user?.email!}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <AdminToggleSwitch user={user} hasLabel={true} />
            </fieldset>

            <div className="flex mt-6 justify-end">
              <button className="Button green" type="submit">
                Save Changes
              </button>
            </div>
          </form>
              </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default DialogEdit;
