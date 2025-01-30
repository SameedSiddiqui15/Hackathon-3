export default function ShopFooterTop() {
    return (
        <section className="bg-[#FAF4F4] py-8">
            <div className="max-w-[1440px] mx-auto px-4 md:py-16">
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="md:basis-1/4 xl:px-14 lg:px-4">
                        <h3 className="text-2xl font-bold">Free Delivery</h3>
                        <p className="text-sm text-gray-500">
                            For all orders over $50, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="md:basis-1/4 xl:px-14 lg:px-4">
                        <h3 className="text-2xl font-bold">90 Days Return</h3>
                        <p className="text-sm text-gray-500">
                            If guests have problems, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="md:basis-1/4 xl:px-14 lg:px-4">
                        <h3 className="text-2xl font-bold">Secure Payment</h3>
                        <p className="text-sm text-gray-500">
                            100% secure payment, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
