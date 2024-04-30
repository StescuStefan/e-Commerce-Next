import Link from "next/link";
import Container from "../Container";
// import Image from "next/image";
import { Redressed } from 'next/font/google'
import CartCount from "./CartCount";
import Image from "next/image";

const redressed = Redressed({subsets: ['latin'], weight: ["400"]})

const NavBar = () => {
    return ( 
        <div className="sticky
        top-0
        w-full
        h-full
        bg-indigo-400
        z-30
        shadow-sm">
            <div className="py-4 border-b-[1px] bg-indigo-400">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/" className={`${redressed.className}
                        font-bold text-2xl`}> <Image src='/logo-technify.png'
                    width={125}
                    height={100}
                    alt='Logo'
                   />
                        </Link>
                        <div className="hidden md:block">Search</div>
                            <div className="flex items-center gap-8 md:gap-12">
                                    <CartCount/>
                                    <div>UserMenu</div>
                            </div>
                    </div>
                </Container>
            </div>
        </div>
     );
}

export default NavBar;