import { Link } from 'react-router-dom';
import register from './Register.module.css';

const Register = () => {
    return(
        <div className={register.register}>
            <div className={register.colorPart}>
                <div className={register.headerColorPart}>
                    <img src={require('../../../assets/NoghteLogo.png')} alt="لوگو"
                         className={register.logo} />
                    <p className={register.headPara}>اینجا هر کسی می‌تونه بنویسه!</p>
                    <p className={register.secondPara}>همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.</p>
                </div>  
                 <div className={register.footerColorPart}>
                    <div className={register.fcpCopyRight}>
                        <p><span>&copy;</span> تمام حقوق برای نقطه محفوظ است.</p>
                    </div>
                    <div className={register.fcpBtn}>
                        <a href="#">صفحه اصلی </a>
                        <a href="#">تماس با ما </a>
                        <span className='fa fa-instagram' />
                        <span className="fa fa-twitter" />
                    </div>
                 </div>
            </div>
            <div className={register.formPart}>
                <div className={register.formSection}>
                    <div className={register.titleInput}>ایجاد حساب کاربری</div>
                    <div className={register.subtitleInput}>شماره موبایل خود را وارد نمایید</div>
                    <input type="number" placeholder='شماره موبایل شما ...' />
                    <button type='submit'>ایجاد حساب کاربری
                        <svg id='hov' width="20" height="20" viewBox="0 0 30 30" >
                            <path d="M18.678 6.774c0.669 0.654 0.721 1.565 0 2.364l-5.62 5.862 5.62 5.862c0.721 0.8 0.669 1.711 0 2.361-0.668 0.654-1.795 0.612-2.422 0-0.627-0.609-6.753-7.043-6.753-7.043-0.335-0.325-0.502-0.753-0.502-1.18s0.168-0.855 0.502-1.184c0 0 6.126-6.43 6.753-7.042 0.627-0.614 1.755-0.654 2.422 0z"></path>
                        </svg>
                    </button>
                </div>
                <div className={register.secondSection}>
                    <a href="#" className={register.googleLogin}>ورود با اکانت <span>گوگل</span></a>
                    <p>ثبت نام در نقطه به منزله موافقت با <a href='#'>قوانین</a> است</p>
                    <span>قبلا عضو شده اید؟ <Link to={'/login'} className={register.link}><span>رفتن به صفحه ی ورود</span></Link></span>
                </div>
                
            </div>
        </div>
    );
}
export default Register;