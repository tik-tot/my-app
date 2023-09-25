export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="m-auto text-center text-white p-4 my-4 text-2xl bg-sky-500">
        PFAS (KM)
      </div>
      {children}
    </>
  );
}
