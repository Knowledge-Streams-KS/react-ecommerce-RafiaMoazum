import "./Product.css"

const Product =(props) =>{

    return(
        <>
        <div className="main">
        <div className="card">
        <img className="picture" src={props.img} alt="image"/>
            <p>{props.category}</p>
            <p className="name">{props.name}</p>
            <p>Price:{props.price}</p>
            
        </div>
        </div>
        </>
    )
}

export default Product