"use client";
import * as Switch from "@radix-ui/react-switch";
import type { User } from "@prisma/client";
import {toast} from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useState, useTransition, ChangeEvent, MouseEvent } from 'react'

import "./componentStyles.css"

type UserProps = User // & { isAdmin: Boolean };

// const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function AdminToggleSwitch({
  user,
  hasLabel,
  isDisabled,
}: {
  user: UserProps;
  hasLabel: boolean;
  isDisabled?:boolean;
}) {

  const router = useRouter()
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const handleChangeRole = async (prevChecked:boolean) => {
        setIsFetching(true)

        const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/${user.email}`;
        const res = await fetch(serverUrl,
          {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user, isAdmin: prevChecked
            })
        })

        await res.json()
        setIsFetching(false)

        startTransition(() => {
            // Refresh the current route and fetch new data 
            // from the server without losing 
            // client-side browser or React state.
            router.refresh()
        })
        const roleMsg = prevChecked? 
        `ได้เปลี่ยนบทบาทของ ${user.name} เป็น Admin เรียบร้อย!`:
        `ได้ยกเลิกบทบาท Admin ของ ${user.name} เรียบร้อย!`;
        toast.success(roleMsg) //, { position: toast.POSITION.TOP_RIGHT });
    }

  return (
    <div>
      {hasLabel && (
        <label className="Label" style={{ paddingRight: 15 }}>
          Is Admin?
        </label>
      )}
      <Switch.Root className="SwitchRoot"
        checked={user.isAdmin? true : false}
        disabled={isDisabled}
        onCheckedChange={handleChangeRole}
        style={{ opacity: !isMutating ? 1 : 0.7 }}
      >
        <Switch.Thumb className="SwitchThumb"/>
      </Switch.Root>
    </div>
  );
}
