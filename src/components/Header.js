import Button from "./Button";

export default function Card({
    bookTotal
}) {
    return (
        <div className="header">
            <div className="header-title">
                Books ({bookTotal})
            </div>
            <div className="header-title">
                <Button />
            </div>
        </div>
    );
}

