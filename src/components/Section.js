
export const Color = ({ shade }) => 
(<div key={shade} className={`color color-${shade}`}>
    <span>{shade}</span>
</div>)

export const Button = ({ shade }) =>  <button className={`btn button-${shade} m-2`}>{shade}</button>

export const Badge = ({ shade }) => <span className={`badge badge-${shade} m-2`}>{shade}</span>

export const Card = ({ shade }) =>  
<div key={`card-${shade}`} className={`card card-${shade} m-2`}  style={{ width: "16rem"}}>
    <h5 className="card-title m-3">Card-{shade}</h5>
    <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className={`btn button-${shade}`}>{shade}</a>
    </div>
</div>


export const Alert = ({ shade }) =>
<div key={`alert-${shade}`} className={`alert alert-${shade}`} role="alert">
    A simple primary alert {shade}
</div>

export default function Section({ title, id, children }) {
    const className = id === "alerts" ? "" : "box-wrap"  
    return(
    <section id={id}>
        <h2>{title}</h2>
        <div className={className}>
            {children}
        </div>
     </section>)
}
