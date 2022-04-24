import Link from 'next/link';

 function Header({ user, loading }) {
   return (
     <header className='container'>
       <nav>
         <ul className='head'>
           {!loading &&
             (user ? (
               <li>
                 <a href="/api/login">Login</a>
               </li>
             ):(
               <>
                 <li>
                   <Link href="/">
                     <a>Profile</a>
                   </Link>
                 </li>
                 <li>
                   <Link href='/bookmark'>
                     <a>Bookmarks</a>
                   </Link>
                 </li>
               </>
             ))}
         </ul>
       </nav>
     </header>
   );
 }

export default Header;