import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/images/event.jpg"
            alt="logo"
            width={64}
            height={38}
          />
        </Link>

        <p>2023 Events. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer