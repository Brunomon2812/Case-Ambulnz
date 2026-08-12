import styled from "styled-components";

export const ContainerDiv = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  border-radius: 8px;
  margin: 1em;
  background-color: #F2A30F;
  -webkit-box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  -moz-box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  padding: 20px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;

    .close-popup {
      position: absolute;
      top: 0;
      left: 100%;
      transform: translateX(-100%);

      padding: 2px 5px;

      width: auto;

      :hover {
        cursor: pointer;
        font-weight: bold;
        background-color: lightgray;
      }
    }
  }
`;

function OrderSuccessPopup(props) {
  const { order, closePopup } = props;

  return (
    <ContainerDiv>
      <div>
        <h2>Order placed successfully!</h2>
        <h3>Order summary</h3>
        <p>Order id: {order.id}</p>
        {order.pizzas.map((pizza) => (
          <p key={pizza.name}>
            Pizza {pizza.name} -{" "}
            {pizza.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            x {pizza.quantity}
          </p>
        ))}
        <p>
          Total paid:{" "}
          {order.total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>

        <span className="close-popup" onClick={closePopup}>
          x
        </span>
      </div>
    </ContainerDiv>
  );
}

export default OrderSuccessPopup;
