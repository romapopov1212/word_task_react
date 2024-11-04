import {Card} from "antd";

function CarCard() {


    return (
        <div>
            <Card
                title="Car"
                extra={<a href="#">More</a>}
                style={{
                    width: 300,
                }}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default CarCard
