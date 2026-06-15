export default function Home() {
  return (
    <main style={{ fontFamily: "monospace", padding: "2rem" }}>
      <h1>SMS Forwarder Backend</h1>
      <p>Available endpoints:</p>
      <ul>
        <li><code>POST /api/payment</code> — Submit a payment</li>
        <li><code>GET /api/health</code> — Health check</li>
      </ul>
    </main>
  );
}
