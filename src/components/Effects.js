import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Effects = () => {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
        { init && (<Particles
            id="tsparticles"
            className="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        grab: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                // particles: {
                //     color: {
                //         value: "#ffffff",
                //     },
                //     links: {
                //         color: "#ffffff",
                //         distance: 150,
                //         enable: true,
                //         opacity: 0.5,
                //         width: 1,
                //     },
                //     move: {
                //         direction: "none",
                //         enable: true,
                //         outModes: {
                //             default: "bounce",
                //         },
                //         random: false,
                //         speed: 6,
                //         straight: false,
                //     },
                //     number: {
                //         density: {
                //             enable: true,
                //             area: 800,
                //         },
                //         value: 80,
                //     },
                //     opacity: {
                //         value: 0.5,
                //     },
                //     shape: {
                //         type: "circle",
                //     },
                //     size: {
                //         value: { min: 1, max: 5 },
                //     },
                // },
                particles: {
                    number: { 
                        value: 250, 
                        density: { 
                            enable: true,
                            area: 800 
                        } 
                    },
                    color: {
                        // value: ["#2EB67D", "#36C5F0"] 
                        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"] 
                    }, 
                    shape: { 
                        type: "circle" 
                    }, 
                    opacity: {
                        value: 1 
                    },
                    size: { 
                        value: { 
                            min: 1, 
                            max: 5 
                        } 
                    }, 
                    links: { 
                        enable: true, 
                        distance: 150, 
                        color: "#808080", 
                        opacity: 0.4, 
                        width: 1 
                    }, 
                    move: { 
                        enable: true, 
                        speed: 5, 
                        direction: "none", 
                        random: false, 
                        straight: false, 
                        outModes: { 
                            default: "bounce" 
                        } 
                    } 
                },
                detectRetina: true,
        }}
        />
    )}
    </>
    );
}

export default Effects;