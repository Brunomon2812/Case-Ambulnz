import { Button } from "@mui/material";
import styled from "styled-components";
import OrderItemCard from "./OrderItemCard";

export const ContainerSection = styled.section`
  width: 30em;
  border-radius: 8px;
  margin: 1em;
  background-color: #ebebeb;
  -webkit-box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  -moz-box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  padding: 20px;

  h1 {
    font-size: 1.5em;
    text-align: center;
  }
`;

function OrderSummary(props) {
  const { cart, removeFromCart, total, confirmOrder } = props;

  return (
    <ContainerSection>
      <h1>Resumo do pedido</h1>

      {cart.map((pizza) => {
        return (
          <OrderItemCard
            key={pizza.name}
            pizza={pizza}
            removeFromCart={removeFromCart}
          />
        );
      })}

      <h2>
        Total:{" "}
        {total.toLocaleString("pt-br", { style: "currency", currency: "USD" })}
      </h2>
      <Button variant="contained" onClick={confirmOrder}>Confirmar pedido</Button>
    </ContainerSection>
  );
}

export default OrderSummary;
