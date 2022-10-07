import { Link } from 'react-router-dom';
import home from './Home.module.css'

const Home = () => {
    return (
        <>
            <div className={home.homePage}>
                <section className={home.sectionBestPosts}>
                    <div className={home.postContainer}>
                        <div className={home.postItem}>
                            <div className={home.postCaption}>
                                <a className={home.Title} href="#">خانواده عزیزم من یک فریلنسرم؛ اجازه دهید تا کار کنم!</a>
                                <div className={home.authorInfo}>
                                    <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                    <div className={home.more}>
                                        <span>معراج رجبی</span>
                                        <span>4 سال پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={home.postItem}>
                            <div className={home.postCaption}>
                                <a className={home.Title} href="#">خانواده عزیزم من یک فریلنسرم؛ اجازه دهید تا کار کنم!</a>
                                <div className={home.authorInfo}>
                                    <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                    <div className={home.more}>
                                        <span>معراج رجبی</span>
                                        <span>4 سال پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={home.postItem}>
                            <div className={home.postCaption}>
                                <a className={home.Title} href="#">خانواده عزیزم من یک فریلنسرم؛ اجازه دهید تا کار کنم!</a>
                                <div className={home.authorInfo}>
                                    <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                    <div className={home.more}>
                                        <span>معراج رجبی</span>
                                        <span>4 سال پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={home.postItem}>
                            <div className={home.postCaption}>
                                <a className={home.Title} href="#">روستای حیرت انگیز قلعه بالا (کویر خارتوران)</a>
                                <div className={home.authorInfo}>
                                    <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                    <div className={home.more}>
                                        <span>معراج رجبی</span>
                                        <span>4 سال پیش</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={home.sectionListPosts}>
                    <div className={home.postContainer}>
                        <div className={home.ListPosts}>
                            <div className={home.BoxPost}>
                                <div className={home.BoxPostHeader}>
                                    <div className={home.infoPost}>
                                        <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                        <div className={home.BoxPostInfo}>
                                            <a className={home.infoNameAuthor} href="#">مهدی حیرانی</a>
                                            <a className={home.infoCreateDate} href="#">۴۲ دقیقه پیش - خواندن ۵ دقیقه</a>
                                        </div>
                                    </div>
                                    <div className={home.categoryName}>برنامه نویسی</div>
                                </div>
                                <div className={home.BoxPostContent}>
                                    <a href="#" className={home.contentTitle}>آشنایی با CORS در وب و هدرهای آن</a>
                                    <a href="#"><img src={require('../assets/cover.jpeg')} alt="کاور" /></a>
                                    <a className={home.contentDesc} href="#">منظور از CORS چیست؟ درخواست‌های Cross-Origin چه خصوصیاتی دارد؟ مفهوم O...
                                    </a>
                                </div>
                                <div className={home.BoxPostFooter}>
                                    <div className={home.btnLike}>
                                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                                        <span className={home.likeCount}>0</span>
                                    </div>
                                    <div className={home.btnBookmark}>
                                        <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className={home.BoxPost}>
                                <div className={home.BoxPostHeader}>
                                    <div className={home.infoPost}>
                                        <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                        <div className={home.BoxPostInfo}>
                                            <a className={home.infoNameAuthor} href="#">مهدی حیرانی</a>
                                            <a className={home.infoCreateDate} href="#">۴۲ دقیقه پیش - خواندن ۵ دقیقه</a>
                                        </div>
                                    </div>
                                    <div className={home.categoryName}>برنامه نویسی</div>
                                </div>
                                <div className={home.BoxPostContent}>
                                    <a href="#" className={home.contentTitle}>آشنایی با CORS در وب و هدرهای آن</a>
                                    <a href="#"><img src={require('../assets/cover.jpeg')} alt="کاور" /></a>
                                    <a className={home.contentDesc} href="#">منظور از CORS چیست؟ درخواست‌های Cross-Origin چه خصوصیاتی دارد؟ مفهوم O...
                                    </a>
                                </div>
                                <div className={home.BoxPostFooter}>
                                    <div className={home.btnLike}>
                                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                                        <span className={home.likeCount}>0</span>
                                    </div>
                                    <div className={home.btnBookmark}>
                                        <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className={home.sideBarPosts}>
                            <div className={home.intro}>
                                <div className={home.header}>به نقطه خوش آمدید</div>
                                <div className={home.body}>
                                    <p>
                                        زمان آن رسیده که شیوه‌ی نوشتن و خواندن مطالبتان را تغییر دهید. اگر برای آغاز دوران جدید آماده هستید به نقطه خوش آمدید.
                                    </p>
                                    <button type='submit'>میخواهم ثبت نام کنم
                                        <svg id='hov' width="20" height="20" viewBox="0 0 30 30" >
                                            <path d="M18.678 6.774c0.669 0.654 0.721 1.565 0 2.364l-5.62 5.862 5.62 5.862c0.721 0.8 0.669 1.711 0 2.361-0.668 0.654-1.795 0.612-2.422 0-0.627-0.609-6.753-7.043-6.753-7.043-0.335-0.325-0.502-0.753-0.502-1.18s0.168-0.855 0.502-1.184c0 0 6.126-6.43 6.753-7.042 0.627-0.614 1.755-0.654 2.422 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={home.postsPopular}>
                                <div className={home.header}>محبوب ترین های نقطه</div>
                                <ul>
                                    <li className={home.postPopular}>
                                        <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                        <div className={home.postPopularInfo}>
                                            <a className={home.infoTitle} href="#">چرا همه‌ی ما به فلسفه نیاز داریم؟</a>
                                            <a className={home.infoName} href="#">رضا باقری</a>
                                        </div>
                                    </li>
                                    <li className={home.postPopular}>
                                        <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                        <div className={home.postPopularInfo}>
                                            <a className={home.infoTitle} href="#">چرا همه‌ی ما به فلسفه نیاز داریم؟</a>
                                            <a className={home.infoName} href="#">رضا باقری</a>
                                        </div>
                                    </li>
                                    <li className={home.postPopular}>
                                        <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                        <div className={home.postPopularInfo}>
                                            <a className={home.infoTitle} href="#">چرا همه‌ی ما به فلسفه نیاز داریم؟</a>
                                            <a className={home.infoName} href="#">رضا باقری</a>
                                        </div>
                                    </li>
                                    <li className={home.postPopular}>
                                        <Link className={home.linkImg} href="#"><img src={require('../assets/default-avatar.jpg')} alt="آواتار" /></Link>
                                        <div className={home.postPopularInfo}>
                                            <a className={home.infoTitle} href="#">چرا همه‌ی ما به فلسفه نیاز داریم؟</a>
                                            <a className={home.infoName} href="#">رضا باقری</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={home.footer}>
                                <ul>
                                    <li className={home.menuItem}>
                                        <i class="fa fa-android" aria-hidden="true"></i>
                                    </li>
                                    <li className={home.menuItem}>
                                        قوانین
                                    </li>
                                    <li className={home.menuItem}>
                                        حریم شخصی
                                    </li>
                                    <li className={home.menuItem}>
                                        نقشه راه
                                    </li>
                                    <li className={home.menuItem}>
                                        تماس با ما
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;