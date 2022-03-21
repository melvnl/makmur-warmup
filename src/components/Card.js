import propTypes from "prop-types";

export default function Card({
    key,
    title,
    author,
    isbn,
    numberOfPages,
    publishedOn,
    country,
    imageUrl,
}) {
    return (
        <div className="card-wrapper">
            <div className="card-detail">
                <div className="detail-header">
                    <h1 className="card-title">
                        {title}
                    </h1>
                    <p className="card-desc">
                        Book by {author}
                    </p>
                </div>
                <div className="detail-body">
                    <div className="wrapper">
                        <p>ISBN</p>
                        <p>{isbn}</p>
                    </div>
                    <div className="wrapper">
                        <p>Number of Page</p>
                        <p>{numberOfPages}</p>
                    </div>
                    <div className="wrapper">
                        <p>Published On</p>
                        <p>{publishedOn}</p>
                    </div>
                    <div className="wrapper">
                        <p>Country Publisher</p>
                        <p>{country}</p>
                    </div>

                </div>
            </div>
            <div className="card-image">
                <img src={imageUrl} alt="" />
            </div>

        </div>
    );
}

