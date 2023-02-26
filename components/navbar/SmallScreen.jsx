const SmallScreen = () => {

    const toggle = () => {
          setOpen(!open);
        }

    return ( 
      <div className="flex items-right gap-5 mr-10 text-lg">
        <Link href="#">
          <FaLock className="ml-3" />
          <p>LogIn</p>
        </Link>
        <Link href="#">
          <FaPhone className="ml-3" />
          <p>Contact</p>
        </Link>
        <div>
          <Link href="#" onClick={toggle}>
            <FaBars className="ml-3" />
            <p>Menu</p>
          </Link>
        </div>
        {open && <MenuButton />}
      </div>
     );
}
 
export default SmallScreen;