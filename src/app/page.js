import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Our Story"}
          mainHeader={"About us"}
        />
        <div className="max-w-md mx-auto mt-4 text-gray-500
        flex-col gap-4 flex">
          <p>
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit
            lorem ipsum dolor sit amet, consectetuc adipiscing elit

          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders
          subHeader={"Don\'t hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel: +233 556 318 804">
            +233 556 318 804
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}
