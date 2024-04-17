import style from "./AboutUs.module.css";
import PageLocation from "../../sharedComponents/PageLocation/PageLocation";
import { HOME_PAGE } from "../../utils/URL";
import OurStory from "./OurStory/OurStory";

import DoYouKnow from "./DoYouKnow/DoYouKnow";

function AboutUs() {
  return (
    <main className={style.main}>
      <PageLocation
        prevPages={[{ path: HOME_PAGE, name: "HOME" }]}
        thisPage="ABOUT US"
      />
      <OurStory />
      <DoYouKnow />
    </main>
  );
}

export default AboutUs;
