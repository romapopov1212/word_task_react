import {Card} from "antd";

function CarCard(props) {

    const {car} = props;


    return (
        <div>
            <Card
                title={
                    <div className="flex items-center gap-3">

                        <span>{car?.type || "Model not available"}</span>
                    </div>
                }


                style={{
                    width: 300,
                }}
            >
                <p>Model: {car.model}</p>
                <p>price: {car.price}</p>
                <p>Description: {car?.descriptions || "not"}</p>
            </Card>
        </div>
    )
}

export default CarCard
