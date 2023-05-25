export default function Features() {
  return (
    <>
      <div className=" my-[120px]">
        <p className="text-[44px] text-white font-bold text-center mb-[50px]">
          FEATURES
        </p>
        <div className="lg:flex grid gap-7 justify-center">
          <div className="w-[312px] h-[344px] bg-[#0E1326] rounded-[32px] p-[32px] grid grid-rows-3">
            <div className="row-span-2">
              <img src="/feature1.png" alt="feature1" />
            </div>
            <div className="flex items-center">
              <span className="text-[20px] font-normal text-white">
                Multipath connection
              </span>
            </div>
            <div>
              <span className="text-[14px] font-light text-[#E3E5E8] opacity-50">
                Your connection packets are
                <br /> simultaneously run through different
                <br /> routes in order to ensure the packet's
                <br /> delivery.
              </span>
            </div>
          </div>

          <div className="w-[312px] h-[344px] bg-[#0E1326] rounded-[32px] p-[32px] grid grid-rows-3">
            <div className="row-span-2">
              <img src="/feature2.png" alt="feature2" />
            </div>
            <div className="flex items-center">
              <span className="text-[20px] font-normal text-white">
                Multipath connection
              </span>
            </div>
            <div>
              <span className="text-[14px] font-light text-[#E3E5E8] opacity-50">
                Your connection packets are
                <br /> simultaneously run through different
                <br /> routes in order to ensure the packet's
                <br /> delivery.
              </span>
            </div>
          </div>

          <div className="w-[312px] h-[344px] bg-[#0E1326] rounded-[32px] p-[32px] grid grid-rows-3">
            <div className="row-span-2">
              <img src="/feature3.png" alt="feature3" />
            </div>
            <div className="flex items-center">
              <span className="text-[20px] font-normal text-white">
                Multipath connection
              </span>
            </div>
            <div>
              <span className="text-[14px] font-light text-[#E3E5E8] opacity-50">
                Your connection packets are
                <br /> simultaneously run through different
                <br /> routes in order to ensure the packet's
                <br /> delivery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
