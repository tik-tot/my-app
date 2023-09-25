import { z } from "zod";

export const EmailSchema = z.object({
  email: z.string({required_error: "Email is required" }).email({
    message: "ฟิลด์จำเป็นและเป็น email ในรูปแบบที่ถูกต้อง",
  }),
});
export type EmailSchemaType = z.infer<typeof EmailSchema>;
