export default function Affiliate() {
  const tabledata = [
    {
      date: "20.04.2023",
      fullname: "Oleksandr Yeromin",
      transactionid: "3456325",
      partialbalance: "$12,99",
    },
  ];
  return (
    <>
      <div style={{ height: "96.5%" }}>
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full h-full">
          <div className="border-b-2 border-[#0E1326] pb-[40px]">
            <div className="flex justify-between">
              <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
                Affiliate
              </span>
              <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
                Date of registration
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between text-white text-[18px] w-3/4 font-medium">
                <p>
                  Your current balance:{" "}
                  <span className="text-[#2C5DFE] ml-[5px]">$12,99</span>
                </p>
                <p>
                  Your Blocked balance:{" "}
                  <span className="text-[#2C5DFE] ml-[5px]">$0</span>
                </p>
                <p>
                  Level of Affiliate:{" "}
                  <span className="text-[#2C5DFE] ml-[5px]">7</span>
                </p>
              </div>
              <div className="text-white text-[18px] font-medium">
                <p>20.04.2023</p>
              </div>
            </div>
            <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
              Request Withdrawal
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[16px] max-h-[650px]">
            <div className="flex items-center justify-between pb-4">
              <div>
                <span>Previous orders</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm bg-[#0E1326] text-white rounded-lg mr-[3px] mt-[3px]"
                  placeholder="Transaction History"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs">
                <tr className="text-[#6B7A99] text-[13px] font-normal ">
                  <th scope="col" className="py-3">
                    Date
                  </th>
                  <th scope="col" className="py-3">
                    Full Name
                  </th>
                  <th scope="col" className="py-3">
                    Transaction ID
                  </th>
                  <th scope="col" className="py-3">
                    Partial balance
                  </th>
                  <th scope="col" className=" py-3 flex justify-center  ">
                    Support client 24/7
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabledata.map((item, key) => {
                  return (
                    <tr className="text-white text-[16px]">
                      <td className="py-4">{item.date}</td>
                      <td className="py-4">{item.fullname}</td>
                      <td className="py-4">{item.transactionid}</td>
                      <td className="py-4">{item.partialbalance}</td>
                      <td className="py-4 flex justify-center">
                        <button>
                          <img
                            src="/pricing-check.png"
                            className="bg-[#1F3C9D] rounded-full"
                            alt="pricing"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
