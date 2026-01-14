import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./Components/Checkout";

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Meals />
                <Cart />
                <Checkout />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
