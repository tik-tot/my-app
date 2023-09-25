"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import type { whitelistUser } from "@prisma/client";
import { toast } from "react-toastify";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState, useTransition, ChangeEvent, MouseEvent } from "react";

import "./componentStyles.css";

// const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function AdminConfirmBtn({
  user
}: {
  user: whitelistUser;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFetching(true);
  
    const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/whitelist/${user.email}`;
    const res = await fetch(serverUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
      }),
    });

    await res.json();

    setIsFetching(false);
    setOpen(false);
    startTransition(() => {
      // Refresh the current route and fetch new data
      // from the server without losing
      // client-side browser or React state.
      router.refresh();
    });
    toast.success(`ได้ลบรายการของ ${user.email} เรียบร้อย!`) //, { position: toast.POSITION.TOP_RIGHT });
  };

  return (
    <div>
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Trigger asChild>
          <TrashIcon className="w-8 h-8 text-red-500 hover:text-red-800"/>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">
              กรุณายืนยันการลบรายการ {user.email}?
            </AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              This action cannot be undone. This will permanently delete this
              whitelist account from the server.
            </AlertDialog.Description>
            <div className="flex gap-6 justify-end mt-4">
              <AlertDialog.Cancel asChild>
                <button className="Button mauve" onClick={() => setOpen(false)}>
                  Cancel
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button className="Button red" onClick={handleDelete}>
                  Yes, delete this account
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}
