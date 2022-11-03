import { Button } from "@mui/material";
import styled from "styled-components";
import bianca from "../../img/pizza_bianca.png";
import bufala from "../../img/pizza_buffala.png";
import diavola from "../../img/pizza_diavola.png";
import margherita from "../../img/pizza_margherita.png";
import romana from "../../img/pizza_romana.png";
import { PizzaImage } from "./styled";

export const ContainerLi = styled.li`
  border-radius: 8px;
  margin: 1em;
  background-color: #ebebeb;
  -webkit-box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  -moz-box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);
  box-shadow: 6px 6px 17px 0px rgba(199, 197, 199, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3,
  .card-price {
    text-align: center;
  }

  span {
    display: inline-block;
    text-align: center;
  }
`;

function PizzaCard(props) {
  const { pizza, addToCart } = props;

  const pizzaImages = (pizzaName) => {
    if (pizzaName === "Bufala") {
      return bufala;
    }
    if (pizzaName === "Diavola") {
      return diavola;
    }
    if (pizzaName === "Margherita") {
      return margherita;
    }
    if (pizzaName === "Pizza Bianca") {
      return bianca;
    }
    if (pizzaName === "Romana") {
      return romana;
    }
  };

  return (
    <ContainerLi>
      <PizzaImage src={pizzaImages(pizza.name)} alt={pizza.name}></PizzaImage>
      <h3>{pizza.name}</h3>
      <p className="card-price">
        {pizza.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <p>
        {pizza.ingredients.map((item, index) => {
          if (index === 0) {
            return (
              <span key={item}>{`${
                item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
              }, `}</span>
            );
          } else if (index === pizza.ingredients.length - 1) {
            return <span key={item}>{`${item}.`}</span>;
          } else {
            return <span key={item}>{`${item}, `}</span>;
          }
        })}
      </p>
      <Button variant="outlined" onClick={() => addToCart(pizza)}>Adicionar no carrinho</Button>
    </ContainerLi>
  );
}

export default PizzaCard;
