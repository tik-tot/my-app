import Link from "next/link";

export default function NeedToLogin() {
  return (
    <div className="p-4 max-w-5xl m-auto h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] items-center justify-center">
      กรุณา{" "}
      <Link
        href="/authPage/login"
        className="text-xl px-1 text-blue-500 hover:text-blue-600"
      >
        login
      </Link>{" "}
      เพื่อเข้าใช้งานระบบ
    </div>
  );
}
