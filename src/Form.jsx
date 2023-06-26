import {useState} from "react"

const Form = ({addColor}) => {
    const [color, setColor] = useState("#f15025")
    const submit = (e) => {
        e.preventDefault()
        addColor(color)
    }
    return (
        <section className="container">
            <h4>Color generator</h4>
            <form className="color-form" onSubmit={submit}>
                <input
                    type="color"
                    name="color"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="text"
                    name="hex"
                    id="hex"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#f15025"
                />
                <button
                    className="btn"
                    type="submit"
                    style={{backgroundColor: color}}>
                    Submit
                </button>
            </form>
        </section>
    )
}
export default Form
