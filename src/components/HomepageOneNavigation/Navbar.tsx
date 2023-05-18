import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="backdrop-blur-[22.5px] rounded-[300px] bg-[#101922] w-[503px] h-[64px]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to="/home"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-[#2c5dfe] hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Game"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-[#2c5dfe] hover:text-white"
                  >
                    Games
                  </Link>
                  <Link
                    to="/HowItWorks"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-[#2c5dfe] hover:text-white"
                  >
                    How it works
                  </Link>
                  <Link
                    to="/Pricing"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-[#2c5dfe] hover:text-white"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/FAQ"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-[#2c5dfe] hover:text-white"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
