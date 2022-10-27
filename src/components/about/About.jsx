import avatar from "../../assets/about.jpg";
function About() {
  console.log(avatar);
  return (
    <section id="about" className="container mt-20">
      <h2 className="heading">About</h2>
      <div className="mt-[52px] mx-auto flex flex-wrap space-x-[10px] space-y-[10px] max-w-[950px]">
        <div className="w-full md:w-[30%]  flex justify-center items-center">
          <img
            src={avatar}
            className="w-[150px] h-[150px] object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="w-full md:w-[70%] text-md md:text-xl font-medium max-w-[550px]">
          <div>
            My name's Tran Van Tien, I am 21 years old, and I am a student at
            HaNoi Open university at the moment.
          </div>
          <div className="mt-5">
            Besides from programming, I also listen to music, watch chinese
            cartoons, and create content for my Tiktok channel
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
