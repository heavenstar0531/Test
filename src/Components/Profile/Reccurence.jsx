export default function Reccurence() {
  const tabledata = [
    {
      sign: "4852111",
      flat: "Enterprise",
      method: "Debit Card",
      status: "Paid to 20.05.2023",
    },
  ];
  return (
    <>
      <div style={{ height: "96.5%" }}>
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full h-full">
          <div className="flex justify-between">
            <p className="text-[#4D5E80] text-[13px] font-medium  flex  items-center">
              Reccurence
            </p>
          </div>
          <p className="text-[18px] font-medium text-white">Subscriptions</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[36px] max-h-[630px]">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs">
                <tr className="text-[#6B7A99] text-[13px] font-normal ">
                  <th scope="col" className="py-3">
                    Signature№
                  </th>
                  <th scope="col" className="py-3">
                    Flat
                  </th>
                  <th scope="col" className="py-3">
                    Method
                  </th>
                  <th scope="col" className=" py-3 flex justify-end  ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabledata.map((item, key) => {
                  return (
                    <tr className="text-white text-[16px]">
                      <td className="py-4">{item.sign}</td>
                      <td className="py-4">
                        <div>
                          {item.flat}
                          <a
                            href="#change"
                            className="text-[#6B7A99] text-[14px] underline ml-[10px]"
                          >
                            Change
                          </a>
                        </div>
                      </td>
                      <td className="py-4">{item.method}</td>
                      <td className="py-4 flex justify-end">
                        <div className="flex ">
                          {item.status}
                          <button className="ml-[10px]">
                            <img
                              src="/pricing-check.png"
                              className="bg-[#1F3C9D] rounded-full "
                              alt="pricing"
                            />
                          </button>
                        </div>
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
