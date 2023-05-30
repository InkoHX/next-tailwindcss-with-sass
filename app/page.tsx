import { Card } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-4 max-w-5xl mx-auto p-4">
      <Card title="Title">{"ABCDEFGHIJK".repeat(10)}</Card>
      <Card title="Title">{"ABCDEFGHIJK".repeat(10)}</Card>
      <Card title="Title">{"ABCDEFGHIJK".repeat(10)}</Card>
      <Card title="Title">{"ABCDEFGHIJK".repeat(10)}</Card>
      <Card title="Title">{"ABCDEFGHIJK".repeat(10)}</Card>
      <Card title="Title">{"ABCDEFGHIJK".repeat(10)}</Card>
    </main>
  );
}
