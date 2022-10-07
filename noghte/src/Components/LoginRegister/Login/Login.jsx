import { Link } from 'react-router-dom';
import login from './Login.module.css';

const Login = () => {
    return(
        <div className={login.login}>
            <div className={login.colorPart}>
                <div className={login.headerColorPart}>
                    <img src={require('../../../assets/NoghteLogo.png')} alt="لوگو"
                         className={login.logo} />
                    <p className={login.headPara}>اینجا هر کسی می‌تونه بنویسه!</p>
                    <p className={login.secondPara}>همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.</p>
                    <ul>
                        <li>
                            <svg width="24px" height="14px" viewBox="474 7 24 14">
                                <path d="M491.999999,8.99999958 L490.589999,7.58999981 L484.249999,13.9299996 L485.659999,15.3399993 L491.999999,8.99999958 Z M496.239998,7.58999981 L485.659999,18.169999 L481.48,13.9999993 L480.07,15.409999 L485.659999,20.9999989 L497.659998,8.99999958 L496.239998,7.58999981 Z M474.41,15.409999 L480,20.9999989 L481.409999,19.589999 L475.83,13.9999993 L474.41,15.409999 Z" 
                                    id="Fill-2" stroke="none" fill="#FFFFFF">
                                </path>
                            </svg>اگر شما هم عاشق مطالعه هستید در ویرگول می‌توانید مطالب متنوعی را در موضوعات مختلف بخوانید.
                        </li>
                        <li>
                            <svg width="24px" height="14px" viewBox="474 7 24 14">
                                <path d="M491.999999,8.99999958 L490.589999,7.58999981 L484.249999,13.9299996 L485.659999,15.3399993 L491.999999,8.99999958 Z M496.239998,7.58999981 L485.659999,18.169999 L481.48,13.9999993 L480.07,15.409999 L485.659999,20.9999989 L497.659998,8.99999958 L496.239998,7.58999981 Z M474.41,15.409999 L480,20.9999989 L481.409999,19.589999 L475.83,13.9999993 L474.41,15.409999 Z" 
                                    id="Fill-2" stroke="none" fill="#FFFFFF">
                                </path>
                            </svg>با نوشتن مطلبتان در ویرگول آن را در معرض دید قشر وسیعی از خوانندگان قرار خواهید داد.
                        </li>
                        <li>
                            <svg width="24px" height="14px" viewBox="474 7 24 14">
                                <path d="M491.999999,8.99999958 L490.589999,7.58999981 L484.249999,13.9299996 L485.659999,15.3399993 L491.999999,8.99999958 Z M496.239998,7.58999981 L485.659999,18.169999 L481.48,13.9999993 L480.07,15.409999 L485.659999,20.9999989 L497.659998,8.99999958 L496.239998,7.58999981 Z M474.41,15.409999 L480,20.9999989 L481.409999,19.589999 L475.83,13.9999993 L474.41,15.409999 Z" 
                                    id="Fill-2" stroke="none" fill="#FFFFFF">
                                </path>
                            </svg>ویرگول آمار دقیقی از تعداد و میزان خوانده شدن مطلبتان به شما ارائه می‌دهد.
                        </li>
                        </ul>
                </div>  
                 <div className={login.footerColorPart}>
                    <div className={login.fcpCopyRight}>
                        <p><span>&copy;</span> تمام حقوق برای نقطه محفوظ است.</p>
                    </div>
                    <div className={login.fcpBtn}>
                        <a href="#">صفحه اصلی </a>
                        <a href="#">تماس با ما </a>
                        <span className='fa fa-instagram' />
                        <span className="fa fa-twitter" />
                    </div>
                 </div>
            </div>
            <div className={login.formPart}>
                <div className={login.formSection}>
                    <div className={login.titleInput}>ورود به حساب کاربری</div>
                    <div className={login.subtitleInput}>شماره موبایل یا نام کاربری خود را وارد نمایید</div>
                    <input type="text" placeholder='شماره موبایل یا نام کاربری شما ...' />
                    <button type='submit'>ورود به حساب کاربری
                        <svg id='hov' width="20" height="20" viewBox="0 0 30 30" >
                            <path d="M18.678 6.774c0.669 0.654 0.721 1.565 0 2.364l-5.62 5.862 5.62 5.862c0.721 0.8 0.669 1.711 0 2.361-0.668 0.654-1.795 0.612-2.422 0-0.627-0.609-6.753-7.043-6.753-7.043-0.335-0.325-0.502-0.753-0.502-1.18s0.168-0.855 0.502-1.184c0 0 6.126-6.43 6.753-7.042 0.627-0.614 1.755-0.654 2.422 0z"></path>
                        </svg>
                    </button>
                </div>
                <div className={login.secondSection}>
                    <a href="#" className={login.googleLogin}>ورود با اکانت <span>گوگل</span></a>
                    <p>ثبت نام در نقطه به منزله موافقت با <a href='#'>قوانین</a> است</p>
                    <span>هنوز عضو نیستید؟ <Link to={'/register'} className={login.link}><span>رفتن به صفحه ی ثبت نام</span></Link></span>
                </div>
                
            </div>
        </div>
    );
}
export default Login;