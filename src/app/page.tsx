import Button from "./ButtonNextPage";

export default function Home() {
  return (
    <div style={{ gap: "1rem", display: "flex" }}>
      <Button href="/next-page">Next page</Button>
      <Button href="/inexistent-page">Inexistent page</Button>
    </div>
  );
}
