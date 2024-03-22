import Price from "../Price/Price";

const Options = () => {

    const prices = [
    
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30",
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$50",
          "features": [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Personal training session (1/month)"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$80",
          "features": [
            "All features of Standard Membership",
            "Unlimited personal training sessions",
            "Access to sauna and steam room"
          ]
        }
     
]



    return (
        <div className="flex gap-4 text-center grid grid-cols-1 md:grid-cols-3 ">
            {prices.map(option=><Price key={option.id} option={option}></Price>)
}
        </div>
    );
};

export default Options;