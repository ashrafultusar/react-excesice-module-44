import { BiCheckCircle } from "react-icons/bi";

const Price = ({ option }) => {
    
    const { name, price, features } = option;

    return (
        <div className="bg-slate-700 rounded-md text-white p-4 space-y-4 flex flex-col h-96">
            <h2 className="text-3xl font-medium">
                <span>{price}</span>
                <span>/mon</span>
            </h2>
            <h2 className="text-2xl font-medium"> { name}</h2>

            
            <div className="flex-grow">
            {
                features.map((e) => ( 
                    <p className="flex justify-center items-center gap-2 "><BiCheckCircle className="text-green-600"/> { e}</p>
                ))
}
         </div>

            
            <button className="bg-green-500 p-2 rounded-md hover:bg-green-800">Buy Now</button>
        </div>
    );
};

export default Price;