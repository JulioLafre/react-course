import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage( {cart} ) {
    return (
        <>
            <Header cart={cart} />
            <div className="notfound-container">
                <h1 className="notfound-title">404</h1>
                <h2 className="notfound-subtitle">Página não encontrada</h2>
                <p className="notfound-text">
                    A página que você está procurando não existe ou foi removida.
                </p>

                <a href="/" className="notfound-button">
                    Voltar para Home
                </a>
            </div>
        </>
    );
}