import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {

    const socialLinks = [
        { name: "facebook", icon: FaFacebookF, link: "https://facebook.com" },
        { name: "youtube", icon: FaYoutube, link: "https://youtube.com" },
        { name: "instagram", icon: FaInstagram, link: "https://instagram.com" },
        { name: "twitter", icon: FaTwitter, link: "https://twitter.com" },
    ]
   
    return ( 
        <div className="gap-3 flex items-center">
         <span className="">Follow us</span>
        
         {socialLinks.map((item) => {
         const Icon = item.icon;
         return (
            <a key={item.name} href={item.link}>
                <Icon />
            </a>
         );
      })}
        
        </div>
     );
}
 
export default SocialLinks;

