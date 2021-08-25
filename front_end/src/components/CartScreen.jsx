import './cartscreen.css';
import  CartItem  from './CartItem';
import {removeFromCart} from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

const CartScreen = () => {
    const dispatch = useDispatch();
    
    const cart = useSelector(state=>state.cart);
    
    const  {cartItems} = cart;
    
    const removeCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    
    const getCartSubTotal = ()=>{
        return cartItems.reduce((price,item)=> (price + item.price),0);
    }
    const checkOut = ()=>{
        console.log("checkout clicked");
    }
    return (
        <div className="cartscreen">
        <div className="cartscreen__left">
            <h2> Shopping Cart</h2>
            {cartItems.length===0?(<div id="edit">Your Cart Is Empty <div className="gb"><Link to="/"> {"<<"} shop </Link></div></div>):cartItems.map((cartElem,index) => <CartItem  key = {index}item={cartElem} removeHandler={removeCartHandler}/>)}
            
        </div>
        <div className="cartscreen__right">
           <div className="cartscreen__info">
               <p>Subtotal  items</p>
               <p>$ {getCartSubTotal().toFixed(2)}</p>
           </div>
           <div>
               <button onClick={()=>checkOut()}>Proceed To Checkout</button>
           </div>
        </div>
    </div>
    )
}
export default CartScreen;