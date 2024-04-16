import React from "react";
import "./CourseIntroduction.css";
import SectionHeader from "../../../modules/SectionHeader/SectionHeader";
function CourseIntroduction() {
  return (
    <div className="introduction">
      <div className="introduction__item">
        <SectionHeader title="آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار " />
        <img
          src="/images/info/1.gif"
          alt="course info image"
          className="introduction__img img-fluid"
        />
        <p className="introduction__text">
          کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه
          چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به
          شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد
          بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید!
        </p>
        <p className="introduction__text">
          در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا
          اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ
          مشکلی برای ورود به بازار کار نداشته باشید
        </p>
      </div>
      <div className="introduction__item">
        <SectionHeader title=" هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)" />
        <img
          src="/images/info/2.jpg"
          alt="course info image"
          className="introduction__img img-fluid"
        />
        <p className="introduction__text">
          وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم، از کتابخانه
          هایی به اسم Lodash و Formik استفاده می شد، در حالی که من اولین بارم
          بود اسم Formik را می شنیدم و تا اون موقع از این کتابخانه ها استفاده
          نکرده بودم.
        </p>
        <p className="introduction__text">
          همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از مهم ترین
          مباحثی هستند که هر برنامه نویس وب برای ورود به بازار کار و کسب درآمد
          بهتر، راحت و بیشتر باید با آن ها کار کرده باشد{" "}
        </p>
        <p className="introduction__text">
          همان طور که از اسم این دوره مشخص است، هدف از این دوره آموزش 20 مورد از
          کاربردی ترین و پر استفاده ترین کتابخانه های جاوا اسکریپت است تا شما
          بتوانید بعد از این دوره با قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی
          وب را ادامه دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و در نهایت
          وارد بازار کار شده و کسب درآمد کنید.
        </p>
        <p className="introduction__text">
          شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی کار نکرده
          باشید، باید بلد باشید که چطور باید یک کتابخانه جدید را یاد بگیرید. فرض
          کنید یک یک کتابخانه جدید ساخته شد. آیا شما باید منتظر دوره آموزشی
          باشید؟! قطعا نه.
        </p>
        <p className="introduction__text">
          در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه یادگیری
          یک کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا بعد از گذراندن
          دوره، دیگر وابسته هیچ دوره یا شخص خاصی نباشید و اگر کتابخانه جدیدی به
          دنیای جاوا اسکریپت و وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
        </p>
      </div>
      <div className="introduction__btns">
        <a href="#" className="introduction__btns-item">
          دانلود همگانی ویدیوها
        </a>
        <a href="#" className="introduction__btns-item">
          دانلود همگانی پیوست‌ها
        </a>
      </div>

      <div className="introduction__topic"></div>
    </div>
  );
}

export default CourseIntroduction;
