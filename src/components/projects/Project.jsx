function Project({ href, srcImg, name, tag }) {
  return (
    <a
      className="block cursor-pointer md:w-[calc(100%/2)] lg:w-[calc(100%/3)] pt-10 px-3 md:px-8 md:hover:scale-[1.15] transition-all "
      href={href}
      target="_blank"
    >
      <div className="text-bgColor">
        <div className="w-full  overflow-hidden">
          <img
            className="w-full h-[180px] object-cover rounded-t-lg"
            src={srcImg}
            alt=""
          />
        </div>
        <div
          className="flex flex-start flex-col px-4 pb-5 rounded-b-lg bg-white-800 w-full
        pb-[140px]"
        >
          <h3 className="text-xl  font-bold my-2">{name}</h3>
          <div className="flex text-sm flex-wrap font-semibold gap-x-2">
            {tag.map((item, index) => {
              return (
                <span key={index} className="bg-blue-400 px-2 py-1 rounded-md">
                  <div className="flex items-center space-x-[5px]">
                    <span className="text-[20px]">{item.icon}</span>
                    <span>{item.language}</span>
                  </div>
                </span>
              );
            })}
          </div>
          <div className="text-lg font-medium mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            maiores architecto
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;
