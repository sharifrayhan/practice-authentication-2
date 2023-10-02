const Banner = () => {
  return (
    <div className=" h-screen flex justify-center  bg-[url('/src/assets/banner.jpg')] bg-cover">

      <div className="join   mt-9 ">
        <input
          className="input w-96 input-bordered join-item"
          placeholder="Search item"
        />
        <div>
          <button className="btn join-item rounded-r-full">Search</button>
        </div>
      </div>

    </div>
  );
};

export default Banner;
