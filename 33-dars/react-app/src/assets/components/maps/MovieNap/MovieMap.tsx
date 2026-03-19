import type { IDataTypes } from "../../../pages/products/Products"


interface IDataType {
    item: IDataTypes

}

function MovieMap({ item }: IDataType) {
    return (
        <div className="product-card">
            <div className="card-shimmer"></div>
            <div className="image-container">
                {/* Bu yerga mahsulot rasmi keladi */}
                <span className="image-box" style={{ fontSize: '50px' }}>
                    <img src={item.rasm} width={"50%"} />
                </span>

            </div>

            <div className="product-info">
                <h3>{item.movieTitle}</h3>
                <p>{item.country}</p>
                <p >{item.year}</p>

                <div className="price-tag">
                    <span className="price">{item.year}</span>
                    <button className="add-to-cart">ko'rish</button>
                </div>
            </div>
        </div>

    )
}

export default MovieMap