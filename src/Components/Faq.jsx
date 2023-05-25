import React, { useState } from "react";

export default function FAQ() {
  const [trial, setTrial] = useState(false);
  const [how, setHow] = useState(false);
  const [lagx, setLagx] = useState(false);
  const [others, setOthers] = useState(false);

  const Trial = () => {
    setTrial(!trial);
  };

  const How = () => {
    setHow(!how);
  };
  const What = () => {
    setLagx(!lagx);
  };
  const Other = () => {
    setOthers(!others);
  };

  const text = `
  LAGX is a high-performance latency reduction software, our
  multi route solutions enable maximum ping reduction, packet
  loss correction and even drops in connection (disconnects).
  NoPing works like an internet GPS, through a route
  calculation algorithm we deviate from all routes that have
  problems like lag or packet loss, and we only use the best
  routes to reach any game in the shortest time (ping).
`;

  return (
    <>
      <div className="lg:grid grid-cols-2 my-[30px] mb-[224px]">
        <div className="font-family-[Bebas Neue] flex flex-col justify-between p-[30px] h-max">
          <p className="md:text-[68px] text-[30px] font-semibold text-white">
            FREQUENTLY
          </p>
          <span className="md:text-[68px] text-[30px] text-white font-semibold">
            ASKED{" "}
            <span className="md:text-[68px] text-[30px] font-semibold text-[#2C5DFE]">
              QUESTION
              <div className="flex justify-left pl-[215px]">
                <img
                  src="/faqunderline.svg"
                  alt="underline"
                  className="w-[352px]"
                />
              </div>
            </span>
          </span>
        </div>
        <div>
          <div className="shadow-md rounded-lg p-12">
            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email"
              onClick={() => What()}
              style={{ width: "100%" }}
            >
              <span className="ww text-white text-[24px]">
                {lagx ? (
                  <>
                    <img src="/faqup.png" alt="faq-up" />
                  </>
                ) : (
                  <>
                    <img src="/faqdown.png" alt="faq-down" />
                  </>
                )}
                What is LAGX?
              </span>
            </p>
            {lagx ? (
              <>
                <div className="pt-[32px]">
                  <p className="text_gray text-sm w-[100%] text-[20px]">
                    {text}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}

            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none  focus:border-blue-500 email pt-[12px]"
              onClick={() => Trial()}
              style={{ width: "100%" }}
            >
              <span className="ww text-white text-[24px]">
                {trial ? (
                  <>
                    <img src="/faqup.png" alt="faq-up" />
                  </>
                ) : (
                  <>
                    <img src="/faqdown.png" alt="faq-down" />
                  </>
                )}
                How to enable 7 days trial?
              </span>
            </p>
            {trial ? (
              <>
                <div className="pt-[24px]">
                  <p className="text_gray text-sm mt-3 w-[100%] text-[20px]">
                    {text}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}

            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email pt-[12px]"
              onClick={() => How()}
              style={{ width: "100%" }}
            >
              <span className="ww text-white text-[24px]">
                {how ? (
                  <>
                    <img src="/faqup.png" alt="faq-up" />
                  </>
                ) : (
                  <>
                    <img src="/faqdown.png" alt="faq-down" />
                  </>
                )}
                How to use LAGX?
              </span>
            </p>
            {how ? (
              <>
                <div className="pt-[24px]">
                  <p className="text_gray text-sm mt-3 w-[100%] text-[20px]">
                    {text}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}

            <p
              className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email pt-[12px]"
              onClick={() => Other()}
              style={{ width: "100%" }}
            >
              <span className="ww text-white text-[24px]">
                {others ? (
                  <>
                    <img src="/faqup.png" alt="faq-up" />
                  </>
                ) : (
                  <>
                    <img src="/faqdown.png" alt="faq-down" />
                  </>
                )}
                Other
              </span>
            </p>
            {others ? (
              <>
                <div className="pt-[24px]">
                  <p className="text_gray text-sm mt-3 w-[100%] text-[20px]">
                    {text}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
