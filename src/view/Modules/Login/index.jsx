import React from 'react'
import style from './Login.module.scss'
import GlomilLogo from '@icons/glomil-logo.svg'
import { Input, Button } from '@components'

const Login = () => {
  return (
    <div
      className={style.loginWrapper}
      style={{
        backgroundImage: `url("/images/cat.png")`
      }}
    >
      <div className={style.loginWrapperLeft}>
        <div className={style.loginWrapperLeftWrapper}>
          <div className={style.loginWrapperLogo}>
            <img src="/images/logo.png" />
          </div>
          <div className={style.loginWrapperLoginWrapper}>
            <div className={style.loginWrapperLoginWrapperInfo}>
              <div className={style.loginWrapperLoginWrapperInfoTitle}>Oturum Aç</div>
              <div className={style.loginWrapperLoginWrapperInfoDesc}>Aşağıdaki bilgileri doldurarak giriş yapabilirsiniz.</div>
            </div>
            <div className={style.loginWrapperLoginWrapperInputs}>
              <div>
                <Input className={style.loginWrapperLoginWrapperInput} placeholder="E-posta" />
              </div>
              <div className={style.loginWrapperLoginWrapperInputsContainer}>
                <Input className={style.loginWrapperLoginWrapperInput} placeholder="Şifre" />
              </div>
            </div>
            <div className={style.loginWrapperLoginWrapperButton}>
              <Button type="primary">Giriş Yap</Button>
            </div>
            <div className={style.loginWrapperLoginWrapperForgot}>
              <div className={style.loginWrapperLoginWrapperForgotUsername}>
                Henüz bir hesabınız yok mu? <span>Üye ol</span>
              </div>
              <div className={style.loginWrapperLoginWrapperForgotUsername}>Şifremi Unuttum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
