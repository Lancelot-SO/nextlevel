export default function MenuItem() {
    return (

        <div className="bg-gray-200 hover:bg-white 
        hover:shadow-md hover:shadow-black/25 transition-all cursor-pointer p-4 rounded-lg text-center">
            <div className="text-center">
                <img src="/pizza.png" alt="pizza" className="max-h-auto max-h-24
        block mx-auto"/>
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">lorem ipsum dolor sit amet, consectetuc adipiscing elit</p>
            <button className="bg-primary my-4 text-white rounded-full px-8 py-2">Add to cart $12</button>
        </div>
    )
}