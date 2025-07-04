import "./styles/Header.css"
import logoUrl from "../assets/chef-claude-logo.png"
 
export default function Header() {
    return (
        <header>
            <h1>Chef</h1>
            <img src={logoUrl} alt="logo" aria-label="logo"></img>
            <h1>Claude</h1>
        </header>
    )
}