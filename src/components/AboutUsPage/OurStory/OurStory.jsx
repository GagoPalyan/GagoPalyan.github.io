import ImgContent from "../ImgContent/ImgContent";

import imgContent1 from "../../../assets/Desktop/About Us/imgContent1.png";

function OurStory() {
  return (
    <ImgContent
      image={imgContent1}
      caption="our story"
      text="From a blog to online stor!"
      titlePosition="left"
    >
      <p>
        The Olive first opened it’s doors in November 2023. It all started as a
        humble healthy eating blog . Then we wanted to make healthy eating
        simple and over the time, that little blog grew! We provide a wealth of
        nutrition knowledge to our clients and members.
      </p>
    </ImgContent>
  );
}

export default OurStory;
