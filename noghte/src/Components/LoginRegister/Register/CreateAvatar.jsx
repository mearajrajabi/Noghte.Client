import { useState} from 'react';
import createAvatar from './CreateAvatar.module.css';

const CreateAvatar =() =>{
    
    const [uploadFile, setUploadFile] = useState(null);

    const onChangeInput = (e)=>{
        const reader = new FileReader();
          reader.onload= ()=>{
            setUploadFile(reader.result); 
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const dltImage = () =>{
        setUploadFile(null);
    }

    console.log(uploadFile); 
    return(
         <div className={createAvatar.createAvatar}>
                <div className={createAvatar.colorPart}>
                    <div className={createAvatar.headerColorPart}>
                        <img src={require('../../../assets/NoghteLogo.png')} width='145.2px' height='73.2px' alt="لوگو"
                            className={createAvatar.logo} />
                        <p className={createAvatar.headPara}>اینجا هر کسی می‌تونه بنویسه!</p>
                        <p className={createAvatar.secondPara}>همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.</p>
                    </div>  
                    <div className={createAvatar.footerColorPart}>
                        <div className={createAvatar.fcpCopyRight}>
                            <p><span>&copy;</span> تمام حقوق برای نقطه محفوظ است.</p>
                        </div>
                    </div>
                </div>
                <div className={createAvatar.createSection}>
                    <div className={createAvatar.imagePreview}>
                        <input type="file" accept='image/*' className={createAvatar.uploadImage} onChange={onChangeInput}  
                            title="عکس شما" />
                        <img className={createAvatar.displayImage}  src={uploadFile === null? require('../../../assets/new-avatar-register.png') : uploadFile}/>
                        <svg width="15" height="15" viewBox="0 0 448 448">
                            <path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"></path>
                        </svg>
                        <div className={createAvatar.deleteImage}>
                            <button onClick={dltImage}><span className='fa fa-trash'></span></button>
                        </div>
                    </div>
                    <div className={createAvatar.writeName}>
                        <input type="text" placeholder='نام خود را وارد کنید ...' className={createAvatar.inputName} />
                    </div>
                    <div className={createAvatar.btns}>
                        <span>رد کردن این مرحله</span>
                        <button>ذخیره</button>
                    </div>
                </div>
            </div>
        
    )
}
export default CreateAvatar;