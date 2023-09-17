import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  // Redux menyarankan kita untuk memindahkan logika untuk mengambil suatu state yang perlu di olah lagi, seperti mengambil total harga dan total jumlah item ke file slice yang bersangkutan.

  // Nah misalnya seperti contoh dibawah, kita akan pindahkan isi dari function useSelector ini ke cartSlice, yang dimana pada file slice nya kita akan mengeksport sebuah function yang berisikan logika dibawah.

  // const totalCartQuantity = useSelector((state) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0));
  // const totalCartPrice = useSelector((state) => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0));

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
