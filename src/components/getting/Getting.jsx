import Typed from "react-typed";
function Getting() {
  return (
    <section className="relative text-center mt-[144px] text-[34px] md:text-[42px] leading-[65px]">
      <div className="font-bold">Xin Chào các bạn</div>

      <div className="font-medium absolute right-0 left-0">
        I'm{" "}
        <span className="text-blue-400 transition-all font-bold">
          <Typed
            strings={["Tien Tran", " Fontend Developer"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </span>
      </div>

      <div className="mt-[130px]">
        <a
          href="https://www.facebook.com/profile.php?id=100013325043956"
          target="_blank"
          className="text-lg font-bold text-bgColor px-3 py-2  cursor-pointer bg-blue-400 rounded-lg 
        transition-all hover:text-white hover:bg-blue-600"
        >
          My resume
        </a>
      </div>
    </section>
  );
}

export default Getting;
