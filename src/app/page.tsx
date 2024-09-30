import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Simplify Your Health Savings: Securely Store and
          Track Your HSA Receipts for Future Claims
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          HSAReceiptVault allows you to securely store,
          organize, and search your Health Savings Account
          (HSA) receipts with ease. Powered by AI, the app
          lets you quickly find and categorize your
          documents, ensuring effortless tracking and
          management for future medical claims.
        </Typography>
        <Link
          href="https://forms.gle/y83xXYceFJEhz9sX9"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hsa_receipt_vault.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Securely Store and Organize Receipts"
              description="Easily upload and categorize your HSA receipts for future medical expense claims."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="AI-Powered Search"
              description="Quickly find specific receipts or expense categories using advanced AI search functionality."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Track HSA Balances"
              description="Monitor your HSA contributions and balance, helping you plan for future medical expenses during retirement."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Effortlessly Manage Your HSA Receipts: Simple,
            Fast, and Secure
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            HSA Receipt Vault streamlines the process of
            managing your Health Savings Account receipts
            with an intuitive, user-friendly interface.
            Easily upload, organize, and search your
            receipts, ensuring hassle-free tracking and
            peace of mind for future claims.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="HSAReceiptVault.com hero image"
            src="/hsa_receipt_vault.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://forms.gle/y83xXYceFJEhz9sX9"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
