import React from "react";
import "../styles/Cart.css";
import { useCart } from "react-use-cart";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import TextField from '@material-ui/core/TextField';



function Cart() {


  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <h1>Cart Items:({totalItems})</h1>

      <div className="cartItem">
        {items.map((menuItem, index) => {
          // if (menuItem === sweet) {
          return (

            <Table key={index} className="cartTable">
              <TableHead>
              </TableHead>
              <TableBody>
                <TableRow key={menuItem.id}>
                  <TableCell><img src={menuItem.image} alt="item_image" width="50px" height="50px" /></TableCell>
                  <TableCell className="title">{menuItem.title}</TableCell>
                  <TableCell className="description">{menuItem.description}</TableCell>
                  <TableCell className="price">MWK {menuItem.price}</TableCell>
                  <TableCell>
                    <Button
                      className="btn-remove" variant="outlined" style={{ color: '#724563' }}
                      onClick={() =>
                        updateItemQuantity(menuItem.id, menuItem.quantity - 1)
                      }
                    >
                      <RemoveCircleOutlineOutlinedIcon />
                    </Button>
                    <Button
                      className="btn-add" variant="outlined" style={{ color: '#724563' }}
                      onClick={() =>
                        updateItemQuantity(menuItem.id, menuItem.quantity + 1)
                      }
                    >
                      <AddCircleIcon />
                    </Button>
                    <Button
                      className="btn-delete" style={{ color: '#724563' }}
                      onClick={() =>
                        removeItem(menuItem.id, menuItem.quantity - 1)
                      }
                    >
                      <DeleteForeverOutlinedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          );
        })}
        <button className="btn-empty" onClick={() => emptyCart()}>
          Empty Cart
        </button>
      </div>

      <p>You have {totalItems} items in your cart</p>
      <p>Total Cost: MWK {cartTotal}</p>


      <div className="Payment">
        <p>You will pay by:</p>
        <div className="paymentSelection">
          <select defaultValue="mo626">
            <option value="mo626">MO626</option>
            <option value="Mpamba">Mpamba</option>
            <option value="Airtel money">
              Airtel money
            </option>
          </select>
          <p>SPecial Request</p>
          <form action="input"> <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Special Requests"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
          </form>
          <button type="submit" value="Submit" className="submit">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
