
import {DealItemV1} from "../index.jsx";

export default function DealGrid({deals}) {

    return (
        <section className="py-24 md:pb-32 bg-white" style={{
            backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"}} data-config-id="auto-img-1">
            <div className="container px-4 mx-auto max-w-5xl">

                <div className="flex flex-wrap -mx-4">

                    {deals.slice(0, 6).map((deal) => (
                        <DealItemV1 key={deal.id} {...deal } />
                    ))}

                </div>
            </div>
        </section>
    )
}
