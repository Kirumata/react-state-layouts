import { Product } from "./utils"

function CardsView(props: { cards: Product[] }) {

    let array = [];
    for (let i = 0; i < props.cards.length; i++) {
        array.push(
            <div key={`ShopCard №${i}`} className="card card-compact bg-base-200 w-96 shadow-xl">

                <div className="card-body">
                    <h2 className="text-center text-lg font-semibold">{props.cards[i].name.toUpperCase()}</h2>
                    <p className="text-center">{props.cards[i].color}</p>
                    <figure>
                        <img className="size-full"
                            src={props.cards[i].img}
                            alt={props.cards[i].name} />
                    </figure>
                    <div>
                        <table className="table w-full"><tr>
                            <td className="text-primary w-1/2 font-semibold">${props.cards[i].price}</td>
                            <td className="w-1/2 content-center" ><button className="btn btn-outline btn-primary">ADD TO CART</button></td>
                        </tr></table>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="grid grid-cols-3 gap-4 m-8">{array}</div>

        </>
    )
}

export default CardsView