import { ThemeProvider } from "@material-ui/core";
import theme from "app/themes";
import "../styles/globals.scss";
import "../styles/css/PageNotFound.css";
import "../styles/css/Banner.css";
import "../styles/css/TopCategories.css";
import "../styles/css/TopCategoriesItem.css";
import "../styles/css/carousel.css";
import "../styles/css/login.css";

import "styles/introduction/feature/ceo-card.module.scss";

//carousel
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
