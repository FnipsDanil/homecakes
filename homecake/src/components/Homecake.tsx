import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import "../assets/homecaka.css";
import LottieAnimation from "./LottieAnimation";


const Homecake = () => {
    const [colorScheme, ] = useThemeParams();

    return (
        <div className={`themeParam ${colorScheme !== "dark" ? "light" : "dark"}`}>
            <h1>Do you like cakes?</h1>
            <LottieAnimation  path="/src/assets/animeHomecake.json" />
        </div>
    );
};

export default Homecake; 
