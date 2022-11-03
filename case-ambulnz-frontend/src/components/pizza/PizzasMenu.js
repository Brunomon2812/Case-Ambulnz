import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/constants"
import PizzaCard from "../pizza/PizzaCard"

export const ContainerSection = styled.section`
    ul {
        display: flex;
    }
`

function PizzasMenu(props) {
    const { addToCart } = props

    const [ pizzas, setPizzas ] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pizzas`)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <ContainerSection>
            <ul>
                {pizzas.map((pizza) => {
                    return (
                        <PizzaCard
                            key={pizza.name}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    )
                })}
            </ul>
        </ContainerSection>
    )
}

export default PizzasMenu