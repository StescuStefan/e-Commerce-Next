import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
    return ( 
        <footer className="bg-indigo-900 text-slate-200
        text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row
                justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold
                        mb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                         <Link href="#">Laptops</Link>
                          <Link href="#">Desktops</Link>
                           <Link href="#">Watches</Link>
                            <Link href="#">Television</Link>
                             <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold
                        mb-2">Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                         <Link href="#">Shipping Policy</Link>
                          <Link href="#">Returns & Exchanges</Link>
                           <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3
                    mb-6
                    md:mb-0">
                         <h3 className="text-base font-bold
                        mb-2">About Us</h3>
                        <p className="mb-2">
                            Technify Gadgets is your one-stop destination for cutting-edge electronics and tech essentials. Explore a curated collection of top-notch gadgets, from sleek smartphones to powerful laptops, ensuring you stay ahead in the digital world. Elevate your tech experience with Technify Gadgets – where innovation meets convenience in every click.
                        </p>
                        <p>&copy; {new Date().getFullYear()} Technify Gadgets. All rights reserved.</p>
                    </div>
                    <FooterList>
                            <h3 className="text-base font-bold
                        mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                        <Link href="#"><MdFacebook size={24} color="#0084ff"/></Link>
                         <Link href="#"><AiFillTwitterCircle size={24} color="#1DA1F2"/></Link>
                          <Link href="#"><AiFillInstagram size={24} color="#bc2a8d"/></Link>
                           <Link href="#"><AiFillYoutube size={24} color="red"/></Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;