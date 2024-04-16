import React, { useContext, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Input from "../../Components/modules/Form/Input";
import Button from "../../Components/modules/Form/Button";
import swal from "sweetalert";
import AuthContext from "../../context/AuthContext";
import {
  requiredValidator,
  emailValidator,
  minValidator,
  maxValidator,
} from "../../validators/rules";
import { useForm } from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
function Register() {
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authData = useContext(AuthContext);
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();

    const newUser = {
      username: formState.inputs.username.value,
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
    };
    const res = await fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const result = await res.json();

    if (res.status === 201) {
      swal({
        title: "حساب کاربری با موفقیت ایجاد شد",
        icon: "success",
        buttons: "تایید",
      });
      authData.login(result.accessToken, result.user);
      navigate("/");
    }
  };
  useEffect(() => {
    if (authData.isLoggedIn) {
      navigate("/");
    }
  }, [authData]);
  useEffect(()=>{
    document.title = 'ثبت نام'
  },[])
  return (
    <section className="login-register">
      <div className="login register-form">
        <span className="login__title">ساخت حساب کاربری</span>
        <span className="login__subtitle">
          خوشحالیم قراره به جمع ما بپیوندی
        </span>
        <div className="login__new-member">
          <span className="login__new-member-text">
            قبلا ثبت‌نام کرده‌اید؟{" "}
          </span>
          <Link className="login__new-member-link" to="/login">
            وارد شوید
          </Link>
        </div>
        <form action="#" className="login-form">
          <div className="login-form__username">
            <Input
              className="login-form__username-input"
              type="text"
              placeholder="نام و نام خانوداگی"
              element="input"
              id="name"
              onInputHandler={onInputHandler}
              validations={[
                requiredValidator(),
                minValidator(6),
                maxValidator(20),
              ]}
            />
            <i className="login-form__username-icon fa fa-user"></i>
          </div>
          <div className="login-form__username">
            <Input
              className="login-form__username-input"
              type="text"
              placeholder="نام کاربری"
              element="input"
              id="username"
              onInputHandler={onInputHandler}
              validations={[
                requiredValidator(),
                minValidator(8),
                maxValidator(20),
              ]}
            />
            <i className="login-form__username-icon fa fa-user"></i>
          </div>
          <div className="login-form__password">
            <Input
              className="login-form__password-input"
              type="text"
              placeholder="آدرس ایمیل"
              element="input"
              id="email"
              onInputHandler={onInputHandler}
              validations={[
                requiredValidator(),
                maxValidator(25),
                emailValidator(),
              ]}
            />
            <i className="login-form__password-icon fa fa-envelope"></i>
          </div>
          <div className="login-form__password">
            <Input
              className="login-form__password-input"
              type="password"
              placeholder="رمز عبور"
              element="input"
              id="password"
              onInputHandler={onInputHandler}
              validations={[
                requiredValidator(),
                minValidator(8),
                maxValidator(18),
              ]}
            />
            <i className="login-form__password-icon fa fa-lock-open"></i>
          </div>
          <Button
            type="submit"
            onClick={registerUser}
            className={`login-form__btn ${
              formState.isFormValid
                ? "login-form__btn__btn-success"
                : "login-form__btn__btn-error"
            }`}
            disabled={!formState.isFormValid}
          >
            <i className="login-form__btn-icon fa fa-user-plus"></i>
            <span className="login-form__btn-text">عضویت</span>
          </Button>
        </form>
        <div className="login__des">
          <span className="login__des-title">سلام کاربر محترم:</span>
          <ul className="login__des-list">
            <li className="login__des-item">
              لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده
              کنید.
            </li>
            <li className="login__des-item">
              ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
            </li>
            <li className="login__des-item">
              لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Register;
