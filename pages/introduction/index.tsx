import BannerIntroduction from "app/components/elements/introduction/banner-introduction";
import Head from "next/head";
import NavbarIntroduction from "app/components/elements/introduction/navbar-introduction";
import styles from "../styles/Home.module.scss";
import Features from "app/components/elements/introduction/features";
import FeatureFeedback from "app/components/elements/introduction/features/feedback";
import AboutUs from "app/components/elements/introduction/about-us";
import Member from "app/components/elements/introduction/our-team/member";
import OurTeam from "app/components/elements/introduction/our-team";
import Footer from "app/components/elements/footer";

export default function introduction() {
  return (
    <div>
      <NavbarIntroduction />
      <BannerIntroduction />
      <Features />
      <FeatureFeedback />
      <AboutUs />
      <OurTeam />
      <Footer />
    </div>
  );
}
