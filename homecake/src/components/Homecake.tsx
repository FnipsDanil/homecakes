import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import "../assets/homecaka.css";

const Homecake = () => {
    const [colorScheme, ] = useThemeParams();

    return (
        <div className={`themeParam ${colorScheme !== "dark" ? "light" : "dark"}`}>
            <h1>Do you like cakes?</h1>
        </div>
    );
};

export default Homecake; 
