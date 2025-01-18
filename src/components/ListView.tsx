import { Product } from "./utils"

function ListView(props: { items: Product[] }) {

  let array = [];
  for (let i = 0; i < props.items.length; i++) {
    array.push(
      <table><tbody>
        <tr className="bg-base-200">
          <td className="w-1/5"><figure className="flex-none w-24 h-24">
            <img
              src={props.items[i].img}
              alt={props.items[i].name} />
          </figure></td>
          <td className="w-1/5">
            <p className="ctext-center text-lg font-semibold">{props.items[i].name.toUpperCase()}</p>
          </td>
          <td className="w-1/5">
            {props.items[i].color}
          </td>
          <td className="text-primary w-1/5 font-semibold">
            ${props.items[i].price}
          </td>
          <td className="place-content-center">
            <button className="btn btn-outline btn-primary">ADD TO CART</button>
          </td>
        </tr>
      </tbody></table>

    );
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 m-8">{array}</div>
    </>
  )
}

export default ListView