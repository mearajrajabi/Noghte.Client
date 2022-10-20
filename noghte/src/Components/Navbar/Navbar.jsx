import { Link } from 'react-router-dom';
import navbar from './Navbar.module.css';

    const Navbar = () => {
         window.addEventListener('scroll' , ()=>{
             const nav = document.querySelector('nav');
             nav.classList.toggle(`${navbar.sticky}` , window.scrollY > 60);
         })
    return(
        <div className={navbar.navbar}>
            <div className={navbar.navHeader} >
                <div className={navbar.navHeaderRP}>
                    <img src={require("../../assets/NoghteLogoBg.png")} alt="لوگو" width='60px' height='60px'/>
                    <span>نقطه چیست؟</span>
                </div>
                <div className={navbar.navHeaderLP}>
                    <svg height="22" viewBox="0 0 18 18" width="22">
                        <rect fill="#ff13dc" opacity="0" width="22" height="22"></rect>
                         <path d="M16.5865,15.107,12.7,11.2215A6.413,6.413,0,1,0,11.2215,12.7l3.886,3.886a1.05,1.05,0,0,0,1.479-1.479ZM3,7.5A4.5,4.5,0,1,1,7.5,12,4.5,4.5,0,0,1,3,7.5Z"></path>
                    </svg>
                    <Link to={'/login'}><button className={navbar.loginBtn}>ورود</button></Link>
                    <Link to={'/register'}><button className={navbar.registerBtn}>ثبت نام</button></Link>
                </div>
            </div>
            <nav className={navbar.navMenu} id='nav'>
                <ul>
                    <Link><li>جدید ترین پست ها</li></Link>
                    <Link><li>پست های دوستان</li></Link>
                    <Link><li>کسب و کار</li></Link>
                    <Link><li>دلنوشته</li></Link>
                    <Link><li>موفقیت</li></Link>
                    <Link><li>زندگی</li></Link>
                    <Link><li>خلاقیت</li></Link>
                    <Link><li>برنامه نویسی</li></Link>
                    <Link><li>طنز</li></Link>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;