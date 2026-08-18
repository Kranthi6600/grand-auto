
import Layout from "@/components/layout/Layout"
import BannersSecondary from "@/components/sections/BannersSecondary"
import Blog from "@/components/sections/Blog"
import Brand from "@/components/sections/Brand"
import CarsListing from "@/components/sections/CarsListing"
import CarsListingGrid from '@/components/sections/CarsListingGrid'
import Categories from "@/components/sections/Categories"
import Cta from "@/components/sections/Cta"
import CtaBanner from "@/components/sections/CtaBanner"
import Hero from "@/components/sections/Hero"
import Review from "@/components/sections/Review"
import Search from "@/components/sections/Search"
import Services from "@/components/sections/Services"
import Static from "@/components/sections/Static"
import Testimonials from "@/components/sections/Testimonials"
import WhyUs from "@/components/sections/WhyUs"
export default function Home() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={1}>
				<Hero />
				<Search />
				<CarsListing />
				<Brand noBg />
				<WhyUs cls="background-100 pt-96" />
				<BannersSecondary />
				<Cta />
				<Static />
				<Categories />
				<CtaBanner />
				<CarsListingGrid />
				<Testimonials />
				<Services />
				<Review />
				<Blog />
			</Layout>
		</>
	)
}