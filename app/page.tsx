export default function Home() {
  const name = process.env.NEXT_PUBLIC_STUDENT_NAME;
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  
  return (
    <main style={{ textAlign: "center", marginTop: "10%" }}>
      <h1>Lab 8 — Vercel Deployment</h1>
      <p>App: {appName}</p>
      <p>Name: {name}</p>
      <p>Roll: [Your Roll No]</p>
    </main>
  );
}