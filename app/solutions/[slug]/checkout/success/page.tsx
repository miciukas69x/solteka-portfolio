import { redirect } from 'next/navigation'
import CheckoutSuccessClient from './CheckoutSuccessClient'

interface CheckoutSuccessPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ session_id?: string }>;
}

export default async function CheckoutSuccessPage({
  params,
  searchParams,
}: CheckoutSuccessPageProps) {
  const { session_id } = await searchParams;
  const { slug } = await params;

  if (!session_id) {
    redirect(`/solutions/${slug}`)
  }

  return <CheckoutSuccessClient sessionId={session_id} />
}

