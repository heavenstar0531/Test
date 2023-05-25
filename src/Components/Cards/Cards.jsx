import React, { useState } from "react";
import "./cards.css";

const Cards = () => {
  const [payPal, setPayPal] = useState(false);
  const [bit, setBit] = useState(false);
  const [credit, setCredit] = useState(false);
  const [others, setOthers] = useState(false);

  const Payypal = () => {
    setPayPal(!payPal);
  };

  const BittCoin = () => {
    setBit(!bit);
  };
  const Credd = () => {
    setCredit(!credit);
  };
  const Otherr = () => {
    setOthers(!others);
  };
  return (
    <div className="cards text-white">
      <div className="main-container">
        <div className="row cards_inner">
          <div className="text-left">
            <div className="flex justify-between gap-4 pb-[40px]">
              <div className="card_basic shadow-md rounded-lg p-6 h-max">
                <div className="basic-card">
                  <div className="basic-image">
                    <img
                      className="diamonds_img"
                      src="/green-diamond.png"
                      alt="diamond"
                    />
                  </div>
                  <div className="basic-card_inner">
                    <div className="basic-heading">
                      <p>Basic</p>
                      <p className="trail_text text-xs">Free 7 days trial</p>
                    </div>
                    <div className="basic-free text-lg">
                      <b>Free</b>
                    </div>
                  </div>
                </div>
                <div className="border_card"></div>
                <div className="card-body">
                  <div className="content p-4">
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="/green-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      You can Use only 4 games
                    </p>
                    <p className="p-2 card_list">
                      <span>
                        <img
                          className="tick"
                          src="/green-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      Chat support
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="/green-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      Only 7 days trial
                    </p>
                    <p className="p-2 text_gray card_list">
                      {" "}
                      <span>
                        <img className="tick" src="/close.png" alt="close" />
                      </span>
                      All games access
                    </p>
                    <p className="p-2 text_gray card_list">
                      <span>
                        <img className="tick" src="/close.png" alt="close" />
                      </span>{" "}
                      New benefits for game connection
                    </p>
                    <p className="p-2 text_gray card_list">
                      <span>
                        <img className="tick" src="/close.png" alt="close" />
                      </span>{" "}
                      Stable connection
                    </p>
                  </div>
                </div>
                <div className="card-footer pl-6 py-6">
                  <button className=" text-sm mt-3 bg-grey-600 text-white py-2 sub-grey-btn ">
                    Get started free
                  </button>
                </div>
              </div>

              <div className="enterprice card_basic shadow-md rounded-lg p-6 h-max">
                <div className="special_btn">
                  <button className=" text-sm mt-3 bg-blue-600 text-white py-2 px-4 rounded">
                    <b>Special</b>
                  </button>
                </div>
                <div className="basic-card">
                  <div className="basic-image">
                    <img
                      className="diamond_img"
                      src="/blue-diamond.png"
                      alt="bluediamond"
                    />
                  </div>
                  <div className="basic-card_inner">
                    <div className="basic-heading">
                      <p>Enterprise</p>
                      <p className="trail_text text-xs">Unilimited features</p>
                    </div>
                    <div className="basic-free text-lg">
                      <b>$63,99</b>
                    </div>
                  </div>
                </div>
                <div className="border_card"></div>
                <div className="card-body">
                  <div className="content p-4">
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="/blue-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      You can Use only 4 games
                    </p>
                    <p className="p-2 card_list">
                      <span>
                        <img
                          className="tick"
                          src="/blue-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      Chat support
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="/blue-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      Only 7 days trial
                    </p>
                    <p className="p-2  card_list">
                      {" "}
                      <span>
                        <img
                          className="tick"
                          src="/blue-check.png"
                          alt="PricingCheck"
                        />
                      </span>
                      All games access
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="/blue-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      New benefits for game connection
                    </p>
                    <p className="p-2  card_list">
                      <span>
                        <img
                          className="tick"
                          src="/blue-check.png"
                          alt="PricingCheck"
                        />
                      </span>{" "}
                      Stable connection
                    </p>
                  </div>
                </div>
                <div className="card-footer pl-6 py-6">
                  <button className=" text-sm mt-3 bg-blue-600 text-white py-2 sub-btn ">
                    Choose Plan
                  </button>
                </div>
              </div>

              <div className="  shadow-md rounded-lg p-6">
                <div className="email-section ">
                  <span className="number bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded :bg-blue-900 dark:text-blue-300 lg:text-left ">
                    2
                  </span>
                  Enter your email address
                </div>
                <p className="font-medium mr-2 mt-3 text_gray text-sm w-[376px]">
                  Privacy guarantee: We do not share your information and will
                  contact you only as needed to provide our service.
                </p>
                <input
                  type="email"
                  className="appearance-none border border-gray-300 rounded py-2 px-4 mt-3 email-input leading-tight focus:outline-none focus:border-blue-500 email"
                  placeholder="Email"
                />

                <div className="payment-method mt-4">
                  <span className="number bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded :bg-blue-900 dark:text-blue-300 lg:text-left">
                    3
                  </span>
                  Select payment method:
                </div>
                <p className="font-medium mr-2 mt-3 text_gray text-sm w-[376px]">
                  Privacy guarantee: We do not share your information and will
                  contact you only as needed to provide our service.
                </p>

                <p
                  className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email grid grid-cols-2"
                  onClick={() => Credd()}
                >
                  <div className="col-span-1">
                    <span className="ww">
                      {credit ? (
                        <>
                          <img
                            className=""
                            src="/direction-up.png"
                            alt="direction-down"
                          />
                        </>
                      ) : (
                        <img
                          className=""
                          src="/direction-down.png"
                          alt="direction-up"
                        />
                      )}
                      Credit Card
                    </span>{" "}
                    <span className="pay-opt">Option - 1</span>{" "}
                  </div>
                  <div>
                    <span className="flex gap-2 my-[14px] mx-[40px]">
                      <img src="/mastercard.png" alt="mastercard"></img>
                      <img src="/visa.png" alt="visa"></img>
                      <img src="/elo.png" alt="elo"></img>
                      <img src="/hipercard.png" alt="hipercard"></img>
                      <img
                        src="/american-express.png"
                        alt="american-express"
                      ></img>
                    </span>
                  </div>
                </p>

                {credit ? (
                  <>
                    {" "}
                    <div className="grid grid-cols-2 gap-3 mt-2 pb-[6px] pt-[4px]">
                      <div className="col-span-1">
                        <input
                          type="text"
                          className="appearance-none border rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 bg-[#0E1326] border-[#0d1326]"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-span-1">
                        <input
                          type="text"
                          className="appearance-none border bg-[#0E1326] border-[#0d1326] rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="appearance-none border bg-[#0E1326] border-[#0d1326] mt-2 rounded py-2 px-4 leading-tight email-input focus:outline-none focus:border-blue-500 email"
                      placeholder="Card Number"
                    />
                    <div className="grid grid-cols-2 gap-3 mt-4 pb-[14px]">
                      <input
                        type="text"
                        className="appearance-none border bg-[#0E1326] border-[#0d1326] rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Zip/ Postal Code"
                      />
                      <p className="total-order pr-[4px]">
                        Order Total: &nbsp; <b className="price">$63,99</b>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-2 pb-[6px] pt-[4px]">
                      <div className="col-span-1">
                        <button className="bg-blue-500 w-[216px] text-white font-bold py-2 px-4 rounded paybutton">
                          Pay
                        </button>
                      </div>
                      <div className="col-span-1">
                        <p className="text_gray text-sm w-[200px]">
                          By submitting this form, you agree to our{" "}
                          <b className="price"> Terms of Service.</b>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <p
                  className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none  focus:border-blue-500 email grid grid-cols-2"
                  onClick={() => Payypal()}
                >
                  <div className="col-span-1">
                    <span className="ww">
                      {payPal ? (
                        <>
                          {" "}
                          <img
                            className=""
                            src="/direction-up.png"
                            alt="direction-down"
                          />
                        </>
                      ) : (
                        <img
                          className=""
                          src="/direction-down.png"
                          alt="direction-up"
                        />
                      )}
                      Pay Pal{" "}
                    </span>{" "}
                    <span className="pay-opt">Option - 2</span>
                  </div>
                  <div>
                    <span className="flex my-[14px] mx-[13px] float-right">
                      <img src="/paypal.png" alt="paypal"></img>
                    </span>
                  </div>
                </p>
                {payPal ? (
                  <>
                    {" "}
                    <p className="text_gray text-sm mt-3 w-[376px]">
                      CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH PAYPAL.
                    </p>
                    <p className="text_gray text-sm mt-3 w-[330px]">
                      LAGX VPN 12-month plan, billed every 12 months
                      ($8.32/month average) You’re 100% covered by our 30-day
                      money-back guarantee.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded paybutton">
                        Pay with PayPal
                      </button>
                      <p className="total-order">
                        Order Total: &nbsp;<b className="price">$63,99</b>
                      </p>
                    </div>
                    <p className="term-service mt-3">
                      By continuing to PayPal, you agree to our{" "}
                      <a
                        href="/#"
                        class="underline underline-offset-1 ... text-blue-400"
                      >
                        Terms of Service.
                      </a>
                    </p>
                  </>
                ) : (
                  ""
                )}

                <p
                  className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email grid grid-cols-2"
                  onClick={() => BittCoin()}
                >
                  <div className="col-span-1">
                    <span className="ww">
                      {bit ? (
                        <>
                          {" "}
                          <img
                            className=""
                            src="/direction-up.png"
                            alt="direction-down"
                          />
                        </>
                      ) : (
                        <img
                          className=""
                          src="/direction-down.png"
                          alt="direction-up"
                        />
                      )}
                      Bitcoin{" "}
                    </span>
                    <span className="pay-opt">Option - 3</span>
                  </div>
                  <div>
                    <span className="flex my-[14px] mx-[13px] float-right">
                      <img src="/bitcoin.png" alt="bitcoin"></img>
                    </span>
                  </div>
                </p>
                {bit ? (
                  <>
                    {" "}
                    <p className="mt-3 text_gray text-sm w-[330px]">
                      CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH BITPAY.
                    </p>
                    <p className="text_gray text-sm mt-3 w-[330px]">
                      LAGX VPN 12-month plan, billed every 12 months
                      ($8.32/month average) You’re 100% covered by our 30-day
                      money-back guarantee.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded paybutton">
                        Pay with BitPay
                      </button>
                      <p className="total-order">
                        Order Total: &nbsp;<b className="price">$63,99</b>
                      </p>
                    </div>
                    <p className="term-service mt-3">
                      By continuing to PayPal, you agree to our{" "}
                      <a
                        href="/#"
                        class="underline underline-offset-1 ... text-blue-400"
                      >
                        Terms of Service.
                      </a>
                    </p>
                  </>
                ) : (
                  ""
                )}

                <p
                  className="appearance-none border border-gray-300 rounded py-2 px-4 leading-tight mt-3 email-input focus:outline-none focus:border-blue-500 email grid grid-cols-2"
                  onClick={() => Otherr()}
                >
                  <div className="col-span-1">
                    <span className="ww">
                      {others ? (
                        <>
                          {" "}
                          <img
                            className=""
                            src="/direction-up.png"
                            alt="direction-down"
                          />
                        </>
                      ) : (
                        <img
                          className=""
                          src="/direction-down.png"
                          alt="direction-up"
                        />
                      )}
                      Other{" "}
                    </span>
                    <span className="pay-opt">Option - 4</span>
                  </div>
                  <div>
                    <span className="flex gap-2 my-[14px] float-right mx-[14px]">
                      <img src="/unionpay.png" alt="union"></img>
                      <img src="/sqiwi.png" alt="qiwi"></img>
                      <img src="/sripple.png" alt="ripple"></img>
                    </span>
                  </div>
                </p>
                {others ? (
                  <>
                    {" "}
                    <p className="text_gray text-sm mt-3 w-[330px]">
                      CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH PAYMENTWALL.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <img
                        className="payment_icon"
                        src="/union-pay.png"
                        alt="unionpay"
                      />
                      <img
                        className="payment_icon"
                        src="/qiwi.png"
                        alt="bitcoin"
                      />
                      <img
                        className="payment_icon"
                        src="/ripple.png"
                        alt="ripple"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded paybutton">
                        Pay with BitPay
                      </button>
                      <p className="total-order">
                        Order Total: &nbsp; <b className="price">$63,99</b>
                      </p>
                    </div>
                    <p className="term-service mt-3">
                      By continuing to PayPal, you agree to our{" "}
                      <a
                        href="/#"
                        class="underline underline-offset-1 ... text-blue-400"
                      >
                        Terms of Service.
                      </a>
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
