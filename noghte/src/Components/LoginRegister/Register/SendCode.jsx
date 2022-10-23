import { useRef, useState} from 'react';
import sendCode from './SendCode.module.css';

const SendCode = ({ prevRender , nextRender }) => {
    const length = 6;
    const [code, setCode] = useState([...Array(length)].map(() => ""));
    const inputs = useRef([]);
    
    
    const processInput = (e, slot) => {
      const num = e.target.value;
      if (/[^0-9]/.test(num)) return;
      const newCode = [...code];
      newCode[slot] = num;
      setCode(newCode);
      if (slot !== length - 1) {
        inputs.current[slot + 1].focus();
      }
      if(newCode.every(num => num !== "")){
      }
    };
  console.log(code);
    const onKeyUp = (e, slot) => {
      if (e.keyCode === 8 && !code[slot] && slot !== 0) {
        const newCode = [...code];
        newCode[slot - 1] = "";
        setCode(newCode);
        inputs.current[slot - 1].focus();
      }
    };

    return(
        <div className={sendCode.sendCode}>
            <div className={sendCode.colorPart}>
                <div className={sendCode.headerColorPart}>
                    <img src={require('../../../assets/NoghteLogo.png')} width='145.2px' height='73.2px' alt="لوگو"
                        className={sendCode.logo} />
                    <p className={sendCode.headPara}>اینجا هر کسی می‌تونه بنویسه!</p>
                    <p className={sendCode.secondPara}>همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.</p>
                </div>  
                <div className={sendCode.footerColorPart}>
                    <div className={sendCode.fcpCopyRight}>
                        <p><span>&copy;</span> تمام حقوق برای نقطه محفوظ است.</p>
                    </div>
                </div>
            </div>
             <div className={sendCode.sendCodeSection}>
                <div className={ sendCode.formSection}>
                    <div className={ sendCode.formHeader}>
                        <span className={sendCode.title}>کد تائید را وارد کنید</span>
                        <p className={sendCode.subtitle}>کد تائید برای شماره موبایل <span>09309232493</span> ارسال گردید</p>
                    </div>
                    <div className={ sendCode.inputsGroup}>
                        {code.map((num, idx) => {
                            return (
                                <input className={sendCode.inputs}
                                key={idx}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={num}
                                autoFocus={!code[0].length && idx === 0}
                                onChange={e => processInput(e, idx)}
                                onKeyUp={e => onKeyUp(e, idx)}
                                ref={ref => inputs.current.push(ref)}
                                />
                            );
                        })}
                    </div>
                    <div className={ sendCode.formFooter}>
                        <p>ارسال مجدد کد تا <span>0:27</span> دیگر</p>
                        <div className={sendCode.confirmCodeBtn}>
                            <button onClick={nextRender}>تائید و ادامه</button>
                        </div>
                        <div className={sendCode.backBtn}>
                            <button onClick={prevRender}>
                                <svg width="21" height="21" viewBox="0 0 21 21">
                                    <path d="M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z"></path>
                                </svg>
                                برگشتن به مرحله ی قبل 
                            </button>
                        </div>
                        
                    </div>
                </div>
             </div>
        </div>
    );
}
export default SendCode;