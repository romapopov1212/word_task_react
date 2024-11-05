// CarDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spin } from "antd";

function CarDetail() {
    const { id } = useParams(); // Получаем ID автомобиля из параметров URL
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                // Замените на ваш фактический URL для получения данных
                const response = await fetch(`http://127.0.0.1:8000/cars/${id}`);
                if (!response.ok) {
                    throw new Error("Ошибка загрузки данных");
                }
                const data = await response.json();
                setCar(data);
            } catch (error) {
                console.error("Ошибка:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]);

    if (loading) {
        return <Spin size="large" />;
    }

    if (!car) {
        return <p>Автомобиль не найден.</p>;
    }

    return (
        <Card title={car.type}>
            <p>Модель: {car.model}</p>
            <p>Цена: {car.price}</p>
            <p>Описание: {car.description || "Описание недоступно"}</p>
        </Card>
    );
}

export default CarDetail;
