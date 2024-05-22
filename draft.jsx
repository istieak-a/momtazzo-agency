const NavItem = ({ title, link, setNavToggle, submenu }) => {
    const [showSubitems, setShowSubitems] = useState(false);
  
    const toggleSubitems = () => {
      setShowSubitems(!showSubitems);
    };
  
    return (
      <div>
        <motion.div
          variants={linkVariants}
          onClick={submenu ? toggleSubitems : () => setNavToggle(false)}
        >
          <Link
            className="flex items-center gap-4 text-white text-[24px] font-outfit font-[500]"
            to={link}
          >
            {title} {submenu && <HiArrowLongRight />}
          </Link>
        </motion.div>
        
      </div>
    );
  };