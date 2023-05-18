import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Settings = React.lazy(() => import("pages/Settings"));
const Profile = React.lazy(() => import("pages/Profile"));
const FavouriteGames = React.lazy(() => import("pages/FavouriteGames"));
const ChooseServers = React.lazy(() => import("pages/ChooseServers"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const HomeGameclickChooseServerConnection = React.lazy(
  () => import("pages/HomeGameclickChooseServerConnection")
);
const HomeGameclickChooseServer = React.lazy(
  () => import("pages/HomeGameclickChooseServer")
);
const HomePreview = React.lazy(() => import("pages/HomePreview"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const LoginEight = React.lazy(() => import("pages/LoginEight"));
const URL = React.lazy(() => import("pages/URL"));
const URLOne = React.lazy(() => import("pages/URLOne"));
const Reccurence = React.lazy(() => import("pages/Reccurence"));
const SupportChat = React.lazy(() => import("pages/SupportChat"));
const Support = React.lazy(() => import("pages/Support"));
const Statistic = React.lazy(() => import("pages/Statistic"));
const Affiliate = React.lazy(() => import("pages/Affiliate"));
const WriteTestimonials = React.lazy(() => import("pages/WriteTestimonials"));
const Rewardprogram = React.lazy(() => import("pages/Rewardprogram"));
const LoginSix = React.lazy(() => import("pages/LoginSix"));
const MydataOne = React.lazy(() => import("pages/MydataOne"));
const Enterakey = React.lazy(() => import("pages/Enterakey"));
const LoginThree = React.lazy(() => import("pages/LoginThree"));
const Changepassword = React.lazy(() => import("pages/Changepassword"));
const Mydata = React.lazy(() => import("pages/Mydata"));
const Cookies = React.lazy(() => import("pages/Cookies"));
const LoginFour = React.lazy(() => import("pages/LoginFour"));
const LoginSeven = React.lazy(() => import("pages/LoginSeven"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Pricingopen = React.lazy(() => import("pages/Pricingopen"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const Howitworks = React.lazy(() => import("pages/Howitworks"));
const Games = React.lazy(() => import("pages/Games"));
const COMPONENETS = React.lazy(() => import("pages/COMPONENETS"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const OokiesInfo = React.lazy(() => import("pages/OokiesInfo"));
const WEBCABINET = React.lazy(() => import("pages/WEBCABINET"));
const LOGINTwo = React.lazy(() => import("pages/LOGINTwo"));
const FAQInfo = React.lazy(() => import("pages/FAQInfo"));
const PricingopenInfo = React.lazy(() => import("pages/PricingopenInfo"));
const PricingInfo = React.lazy(() => import("pages/PricingInfo"));
const HowitworksInfo = React.lazy(() => import("pages/HowitworksInfo"));
const GamesInfo = React.lazy(() => import("pages/GamesInfo"));
const HOMEPAGEInfo = React.lazy(() => import("pages/HOMEPAGEInfo"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/homepageinfo" element={<HOMEPAGEInfo />} />
          <Route path="/gamesinfo" element={<GamesInfo />} />
          <Route path="/howitworksinfo" element={<HowitworksInfo />} />
          <Route path="/pricinginfo" element={<PricingInfo />} />
          <Route path="/pricingopeninfo" element={<PricingopenInfo />} />
          <Route path="/faqinfo" element={<FAQInfo />} />
          <Route path="/logintwo" element={<LOGINTwo />} />
          <Route path="/webcabinet" element={<WEBCABINET />} />
          <Route path="/ookiesinfo" element={<OokiesInfo />} />
          <Route path="/homepageone" element={<HomepageOne />} />
          <Route path="/componenets" element={<COMPONENETS />} />
          <Route path="/games" element={<Games />} />
          <Route path="/howitworks" element={<Howitworks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricingopen" element={<Pricingopen />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/loginseven" element={<LoginSeven />} />
          <Route path="/loginfour" element={<LoginFour />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/mydata" element={<Mydata />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/loginthree" element={<LoginThree />} />
          <Route path="/enterakey" element={<Enterakey />} />
          <Route path="/mydataone" element={<MydataOne />} />
          <Route path="/loginsix" element={<LoginSix />} />
          <Route path="/rewardprogram" element={<Rewardprogram />} />
          <Route path="/writetestimonials" element={<WriteTestimonials />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/support" element={<Support />} />
          <Route path="/supportchat" element={<SupportChat />} />
          <Route path="/reccurence" element={<Reccurence />} />
          <Route path="/urlone" element={<URLOne />} />
          <Route path="/url" element={<URL />} />
          <Route path="/logineight" element={<LoginEight />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homepreview" element={<HomePreview />} />
          <Route
            path="/homegameclickchooseserver"
            element={<HomeGameclickChooseServer />}
          />
          <Route
            path="/homegameclickchooseserverconnection"
            element={<HomeGameclickChooseServerConnection />}
          />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/chooseservers" element={<ChooseServers />} />
          <Route path="/favouritegames" element={<FavouriteGames />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
