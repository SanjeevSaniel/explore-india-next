import HomePage from "./components/Home/HomePage";

import { Kalam } from "@next/font/google";

export const logo = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Home = () => {
  return (
    <main>
      <HomePage />
    </main>
  );
};

export default Home;
