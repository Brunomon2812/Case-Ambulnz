import {HeaderLogo,HeaderContainer} from "./styled"
import pizzaLogo from "../../img/pizza_logo.png"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo src={pizzaLogo} />
        </HeaderContainer>
    )
}