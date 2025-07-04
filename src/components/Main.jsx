import "./styles/Main.css"
 
export default function Main () {
    return (
        <main>
            <form className="ingredientsForm">
                <input type="text" placeholder="e.g., tomatoes"></input>
                <button type='submit'>+ Add ingredient</button>
            </form>
        </main>
    )
}