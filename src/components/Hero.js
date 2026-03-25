import Effects from "./Effects";

export default function Hero() {
return (
    <section className="hero">
        <Effects className="tsparticles" />
        <div className="hero-content">
            <h1 className="hero-title">
                Hello, I'm Yash.
                I'm a full stack software developer.    
            </h1>
            <a href="#projects" className="hero-cta">
                Explore My Work
            </a>
        </div>
    </section>
    );
}
 