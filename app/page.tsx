import { Card } from '@/components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto grid max-w-5xl grid-cols-3 gap-4 p-4">
      <Card title="Title">{'ABCDEFGHIJK'.repeat(10)}</Card>
      <Card title="Title">{'ABCDEFGHIJK'.repeat(10)}</Card>
      <Card title="Title">{'ABCDEFGHIJK'.repeat(10)}</Card>
      <Card title="Title">{'ABCDEFGHIJK'.repeat(10)}</Card>
      <Card title="Title">{'ABCDEFGHIJK'.repeat(10)}</Card>
      <Card title="Title">{'ABCDEFGHIJK'.repeat(10)}</Card>
    </main>
  )
}
