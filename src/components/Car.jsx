import {Card} from "antd";
import { useNavigate } from "react-router-dom";
function CarCard(props) {

    const {car} = props;
    const navigate = useNavigate();

    const handleMoreClick = () => {
        navigate(`/${car.id}`);
    };

    return (
        <div>
            <Card
                title={
                    <div className="flex items-center gap-3">
                        <img src={`/home/rtbf/word_task_react/img/car${car.id}`} alt=""/>
                        <span>{car?.type || "Model not available"}</span>
                    </div>
                }


                style={{
                    width: 300,
                }}
            >
                <p>Model: {car.model}</p>
                <p>price: {car.price}</p>
                <p>
                    Description: {car.descriptions}
                </p>
            </Card>
        </div>
    )
}

export default CarCard
