"use client";
import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailSchemaType, EmailSchema } from "@/types/zodSchema";
import "./componentStyles.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

type FormInputs = EmailSchemaType;

export default function AddWhitelist() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setError,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(EmailSchema),
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { email } = data;

    setIsFetching(true);

    const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/whitelist/${email}`;
    try {
      const res = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      setIsFetching(false);

      if (res.ok) {
        startTransition(() => {
          toast.success(`ได้เพิ่มรายการ ${email} เรียบร้อย!`); //, { position: toast.POSITION.TOP_RIGHT });
          setOpen(false);
          router.refresh();
        });
      } else {
        const msg = await res.json();
        setError("email", { message: msg.message });
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [formState, reset]);
  
  const onOpenModalChange = () => {
    reset({email:""})
    setOpen(prev => !prev)
  } 

  return (
    <Dialog.Root open={open} onOpenChange={onOpenModalChange}>
      <Dialog.Trigger asChild className="self-center p-2 max-w-xl w-full">
        <div className="flex justify-end">
          <PlusCircledIcon className="w-12 h-12  hover:bg-blue-400 hover:bg-opacity-40 rounded-full" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Whitelist</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            เพิ่ม email เข้า whitelist เพื่ออนุญาตให้เข้าใช้ระบบได้ <br />{" "}
            (email นี้ต้องใช้ระบบบัญชีของ google ได้!)
          </Dialog.Description>
          <div className="mt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ opacity: !isMutating ? 1 : 0.7 }}
            >
              <fieldset className="Fieldset flex-col">
                <div className="flex w-full gap-4">
                  <label className="Label" htmlFor="email">
                    Email <span className="text-sm">*</span>
                  </label>
                  <input
                    className="Input"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && (
                  <div className="text-red-400 text-xs">
                    {errors.email.message}
                  </div>
                )}
              </fieldset>
              <div className="flex mt-6 justify-end gap-6">
                <button className="Button green" type="submit">
                  Add
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
}
