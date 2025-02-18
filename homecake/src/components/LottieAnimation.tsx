import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web"; // Добавили AnimationItem
import "../assets/homecaka.css";

interface LottieAnimationProps {
    path: string;
}

const LottieAnimation = ({ path }: LottieAnimationProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<AnimationItem | null>(null); // Используем AnimationItem напрямую

    useEffect(() => {
        if (containerRef.current) {
            if (animationRef.current) {
                animationRef.current.destroy(); // Удаляем старую анимацию перед новой загрузкой
            }

            animationRef.current = lottie.loadAnimation({
                container: containerRef.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                path: path,
            });
        }

        return () => {
            animationRef.current?.destroy(); // Удаляем анимацию при размонтировании
        };
    }, [path]);

    return <div id="lottie-container" ref={containerRef}></div>;
};

export default LottieAnimation;
