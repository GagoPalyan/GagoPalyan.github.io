import ImgContent from "../ImgContent/ImgContent";
import style from "./ContactUs.module.css";
import image1 from "../../../assets/Desktop/About Us/fauzan-ardhi-rqclLm60c1k-unsplash.jpg";
import PageLocation from "../../../sharedComponents/PageLocation/PageLocation";
import { BLOG_PAGE, HOME_PAGE } from "../../../utils/URL";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  messageValidation,
  nameValidation,
} from "../../../utils/validation";

function ContactUs() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <>
      <PageLocation
        prevPages={[{ path: HOME_PAGE, name: "HOME" }]}
        thisPage="CONTACT US"
      />
      <section className={style.content}>
        <ImgContent
          caption="Want more info? Please get in touch!"
          text="Contact Us"
          reverse={true}
          titlePosition="center"
          image={image1}
        >
          <div className={style.contactUs}>
            <div className={style.socials}>
              <ul>
                <li>
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path
                      d="M24.3153 19.7407L18.285 20.918C14.2111 18.8584 11.6953 16.4918 10.231 12.8033L11.3585 6.70983L9.22788 1L3.73501 1C2.0832 1 0.782839 2.37508 1.03032 4.02016C1.64535 8.12623 3.46118 15.5726 8.7666 20.918C14.3385 26.532 22.3648 28.9679 26.7813 29.9372C28.4873 30.3105 30 28.9708 30 27.2106V21.9228L24.3153 19.7407Z"
                      stroke="#212311"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li>
                  <svg width="33" height="27" viewBox="0 0 33 27" fill="none">
                    <path
                      d="M3.69531 5.79297L16.1463 13.2423L28.5973 5.79297"
                      stroke="#212311"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31.2803"
                      height="25.4377"
                      rx="3.5"
                      stroke="#212311"
                    />
                  </svg>
                </li>
                <li>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <circle
                      cx="14.4848"
                      cy="14.4848"
                      r="14.0348"
                      stroke="#212311"
                      strokeWidth="0.9"
                    />
                    <path
                      d="M20.0022 14.4848C20.0022 18.4406 19.3411 22.001 18.2892 24.5557C17.7628 25.8341 17.1474 26.839 16.487 27.5173C15.8281 28.1942 15.1527 28.5195 14.4879 28.5195C13.8231 28.5195 13.1477 28.1942 12.4887 27.5173C11.8284 26.839 11.213 25.8341 10.6866 24.5557C9.63464 22.001 8.97356 18.4406 8.97356 14.4848C8.97356 10.5289 9.63464 6.96851 10.6866 4.41382C11.213 3.13542 11.8284 2.13049 12.4887 1.45218C13.1477 0.775299 13.8231 0.45 14.4879 0.45C15.1527 0.45 15.8281 0.775299 16.487 1.45218C17.1474 2.13049 17.7628 3.13542 18.2892 4.41382C19.3411 6.96851 20.0022 10.5289 20.0022 14.4848Z"
                      stroke="#212311"
                      strokeWidth="0.9"
                    />
                    <path
                      d="M14.4848 8.97041C18.4406 8.97041 22.001 9.63149 24.5557 10.6834C25.8341 11.2098 26.839 11.8252 27.5173 12.4856C28.1942 13.1445 28.5195 13.8199 28.5195 14.4847C28.5195 15.1495 28.1942 15.8249 27.5173 16.4839C26.839 17.1442 25.8341 17.7596 24.5557 18.286C22.001 19.338 18.4406 19.999 14.4848 19.999C10.5289 19.999 6.96851 19.338 4.41382 18.286C3.13542 17.7596 2.13049 17.1442 1.45218 16.4839C0.775299 15.8249 0.45 15.1495 0.45 14.4847C0.45 13.8199 0.775299 13.1445 1.45218 12.4856C2.13049 11.8252 3.13542 11.2098 4.41382 10.6834C6.96851 9.63149 10.5289 8.97041 14.4848 8.97041Z"
                      stroke="#212311"
                      strokeWidth="0.9"
                    />
                  </svg>
                </li>
                <li>
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path
                      d="M15.5 29C13.5958 29 11.7103 28.6379 9.95109 27.9343C8.19187 27.2307 6.5934 26.1995 5.24695 24.8995C3.9005 23.5995 2.83244 22.0561 2.10375 20.3576C1.37505 18.659 1 16.8385 1 15C1 13.1615 1.37505 11.341 2.10375 9.64243C2.83244 7.94387 3.9005 6.40053 5.24695 5.1005C6.5934 3.80048 8.19187 2.76925 9.95109 2.06569C11.7103 1.36212 13.5958 1 15.5 1C19.3456 1 23.0338 2.475 25.753 5.10051C28.4723 7.72601 30 11.287 30 15C30 18.713 28.4723 22.274 25.753 24.8995C23.0338 27.525 19.3456 29 15.5 29ZM15.5 29V13C15.5 11.9391 15.9365 10.9217 16.7134 10.1716C17.4904 9.42143 18.5441 9 19.6429 9H20.6786M10.3214 17H20.6786"
                      stroke="#212311"
                      strokeWidth="1.4"
                    />
                  </svg>
                </li>
                <li>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <rect
                      x="0.620455"
                      y="0.620455"
                      width="27.7286"
                      height="27.7286"
                      rx="7.37955"
                      stroke="#212311"
                      strokeWidth="1.24091"
                    />
                    <circle
                      cx="14"
                      cy="15"
                      r="5.46227"
                      stroke="#212311"
                      strokeWidth="1.07545"
                    />
                    <circle
                      cx="22.7572"
                      cy="7.24155"
                      r="1.24155"
                      fill="#212311"
                    />
                  </svg>
                </li>
              </ul>
              <ul>
                <li>+374 22 227 227</li>
                <li>
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkVlzXGfGPCJmTfjXCqtWKbtsMphjqrmvwlJsvznThsgfNdFPlfXmdwdMGRkZfhKmMVsV"
                  >
                    infoolive@gmail.com
                  </a>
                </li>
                <li>
                  <NavLink to={BLOG_PAGE}>theoliveorganic.blog</NavLink>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/olive-organic"
                  >
                    Olive organic
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/olive-organic/"
                  >
                    olive.organic
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.getInTouch}>
              <h2>Get In Touch!</h2>
              <form>
                <input
                  style={errors.name?.message && { borderColor: "red" }}
                  type="text"
                  placeholder="Name"
                  {...register("name", nameValidation)}
                />
                <input
                  style={errors.email?.message && { borderColor: "red" }}
                  type="text"
                  placeholder="Email"
                  {...register("email", emailValidation)}
                />
                <textarea
                  style={errors.message?.message && { borderColor: "red" }}
                  placeholder="Message"
                  {...register("message", messageValidation)}
                ></textarea>
                <button>Submite</button>
              </form>
            </div>
          </div>
        </ImgContent>
      </section>
    </>
  );
}

export default ContactUs;
