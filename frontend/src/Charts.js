import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Swal from 'sweetalert2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const [numberAnswers, setNumberAnswers] = useState([0, 0, 0, 0]); // Valores iniciales

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      Swal.fire("Cargando datos");
      Swal.showLoading();
      const { data } = await axios.get("http://localhost:4000/get-answers-to-chart");
      setNumberAnswers(data); 
      Swal.close();
    } catch (error) {
      Swal.fire("Ocurrió un error", error.message || "Error desconocido", "error");
    }
  };

  const data = {
    labels: ["Excelente", "Bueno", "Neutro", "Malo"],
    datasets: [
      {
        label: '# de respuestas',
        data: numberAnswers, 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return <Doughnut data={data} />;
}
