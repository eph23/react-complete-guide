import logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="flex flex-col items-center mt-8 mb-16">
            <img
                src={logo}
                alt="A canvas"
                className="mb-8 w-44 h-44 object-contain"
            />
            <h1 className="text-4xl font-bold tracking-widest text-center uppercase text-amber-800">
                ReactArt
            </h1>
            {/* <p className={`${classes.paragraph}`}>
                A community of artists and art-lovers.
            </p> */}
            <p>A community of artists and art-lovers.</p>
        </header>
    );
}
