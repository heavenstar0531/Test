import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import OwnLayout from "./Layout/OwnLayout";

import {
  HomePage,
  GamesPage,
  HowItWorksPage,
  PricingPage,
  FaqPage,
  SignIn,
  SignUp,
  ForgetPassword,
} from "./Pages";

import {
  Affiliate,
  Data,
  Exit,
  Profile,
  PersonalInformation,
  Reccurence,
  SettingKey,
  ShareLink,
  Statistics,
  Support,
  WriteTestimonials,
  RewardProgram,
} from "./Components";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <OwnLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Games",
        element: <GamesPage />,
      },
      {
        path: "/HowItWorks",
        element: <HowItWorksPage />,
      },
      {
        path: "/Pricing",
        element: <PricingPage />,
      },
      {
        path: "/FAQ",
        element: <FaqPage />,
      },
      {
        path: "/LogIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/Profile",
        element: <Profile />,
        children: [
          {
            path: "data",
            element: <Data />,
          },
          {
            path: "settingkey",
            element: <SettingKey />,
          },
          {
            path: "personalInformation",
            element: <PersonalInformation />,
          },
          {
            path: "rewardProgram",
            element: <RewardProgram />,
          },
          {
            path: "writeTestimonials",
            element: <WriteTestimonials />,
          },
          {
            path: "affiliate",
            element: <Affiliate />,
          },
          {
            path: "statistics",
            element: <Statistics />,
          },
          {
            path: "support",
            element: <Support />,
          },
          {
            path: "reccurence",
            element: <Reccurence />,
          },
          {
            path: "shareLink",
            element: <ShareLink />,
          },
          {
            path: "exit",
            element: <Exit />,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={Router} />;
};

export default AppRoutes;
