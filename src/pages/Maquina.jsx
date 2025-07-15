import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VoltageCurrentChart from '../components/VoltageCurrentChart';


const Maquina = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [machineData, setMachineData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulación de fetch de datos de la máquina
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Reemplazar con llamada real a API
                // const response = await fetch(`/api/maquinas/${id}/datos`);
                // const data = await response.json();
                // Simulación de datos
                const data = {
                    nombre: `Máquina ${id}`,
                    datos: {
                        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                        valores: [12, 19, 3, 5, 2, 3],
                    },
                };
                setMachineData(data);
            } catch (err) {
                setError('Error al cargar los datos de la máquina.');
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <h2>Cargando datos de la máquina...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <h1 style={{ color: 'red', textAlign: 'center' }}>
                {error}
            </h1>
        );
    }

    return (
        <div style={{ padding: 24 }}>
            <h2>{machineData.nombre}</h2>
            <VoltageCurrentChart machine={machineData.nombre} /> 

        </div>
    );
};

export default Maquina;