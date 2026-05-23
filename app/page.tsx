export default function Home() {
  const name = process.env.NEXT_PUBLIC_STUDENT_NAME;
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <main style={{ textAlign: "center", marginTop: "10%" }}>
      <h1>Lab 8 — Vercel Deployment</h1>
      <p>App: {appName}</p>
      <p>Name: {name}</p>
      <p>Roll: [Your Roll No]</p>

      <hr style={{ margin: "20px auto", width: "50%" }} />
      
      <h2>Completed Labs</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>✅ Lab 5 — Docker</li>
        <li>✅ Lab 6 — LocalStack</li>
        <li>✅ Lab 7 — Terraform</li>
        <li>✅ Lab 8 — Vercel</li>
      </ul>
    </main>
  );
}