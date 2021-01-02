// using function
export default function About() {
    return (
        <div className="about">
            <h1>Hello About</h1>
            <p>this is Export default</p>
        </div>
    )
}

export function AboutComponent() {
    return (
        <div className="about">this is just an Export</div>
    )
}