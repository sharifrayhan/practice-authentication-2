

const Card = ({card}) => {
   const {id, name, description, price, image} = card;
    return (
        <div className=" h-[485px] bg-[#FEF3EF] rounded-xl" >
            <img className="rounded-t-xl" src={image} />
            <div className="flex flex-col items-center justify-between p-3 px-3 pb-4 h-[170px] " >
                <h1 className="font-bold text-xl mb-1">{name}</h1>
                <p className="text-center mb-2	">{description}</p>
                <div className="flex items-center  justify-center gap-10  mt-auto">
                    <button className="btn  btn-sm bg-[#ECB888] pointer-events-none">Price: {price}$</button>
                    <button className="btn btn-sm bg-[#ECB888]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;