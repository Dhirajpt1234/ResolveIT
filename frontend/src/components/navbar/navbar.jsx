import { useContext } from "react";
import {UserContext} from "../../App"
import { Link } from "react-router-dom";


const navigation = [
  { name: "Home", link: "/", default:true},
  { name: "Dashboard", link: "/dashboard", default:false,user:true},
  { name: "Projects", link: "/projects", default:false,user:true},
  { name: "About", link: "/about", default:true},
  { name: "Contact", link: "/contact", default:true},
];


export default function Navbar()
{
  const {user,setUser} = useContext(UserContext);
  return (
          <div className='mx-auto max-w-7xl bg-gray-100 rounded-md mt-1 px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center'>
              <div className="flex flex-row w-[100%] justify-between">
                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    <img
                      className='h-8 w-16 rounded-lg '
                      src='https://api.logo.com/api/v2/images?logo=logo_8ab1216f-f953-4ef6-9a49-4eb04338849b&u=1708675933800&format=svg&margins=166&width=1000&height=750&fit=contain'
                      alt='Your Company'
                      />
                  </div>
                  <div className='flex gap-10'>
                    {navigation.map((item) => (
                      (item.default===true || (user && item.user)) &&
                      <Link key={item.name}
                      to = {item.link}
                      className= 'rounded-md px-1 py-2 text-md font-medium hover:bg-gray-100'
                      aria-current={item.current ? 'page' : undefined}
                      >
                      {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  {
                    (user) ? <button className="px-4 py-1 text-white bg-[#08a3f2] rounded-md" onClick={()=>{setUser(null)}}>Logout</button> : null
                  }
                </div>
              </div>
            </div>
          </div>
  );
}
