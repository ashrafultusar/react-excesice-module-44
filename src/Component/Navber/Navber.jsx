import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu} from 'react-icons/ai';
import { CgClose } from "react-icons/cg";

const Navber = () => {

const [open,setOpen]=useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
    ];

;

    return (
        <nav className="text-black bg-yellow-200 p-6 ">

            <div className="md:hidden " onClick={() => setOpen(!open)}>
                {
                    open===true? <CgClose className="text-3xl" />
                    :  <AiOutlineMenu className="text-3xl"></AiOutlineMenu>
               }

               
                
</div>
            
            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 pl-6 ${open ? 'top-16':'-top-60'}`}>
            {
                    routes.map(route => <Link key={route.id} route={ route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navber;