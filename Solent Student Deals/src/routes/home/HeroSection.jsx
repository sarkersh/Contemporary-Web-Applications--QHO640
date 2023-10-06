
import {HeroBanner} from "../../assets/index.js";

export default function HeroSection() {
    return (
        <section className="w-full my-0" >

                <div className="col-span-12 lg:col-span-12" >
                    <div className="w-full" >
                        <img src={HeroBanner} alt="" className="w-[100%]" />
                    </div>
                </div>
        </section>
    )
}
