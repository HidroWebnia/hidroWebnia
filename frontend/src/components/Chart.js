import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 800px;
  margin: 80px auto;  
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const FilterButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 150px;
  text-align: center;

  &.active {
    background-color: #0056b3;
  }

  &:hover {
    background-color: #0066cc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const fetchChartData = async () => {
  return {
    mes_referencia: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    temperatura: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],  
    ph: [6.5, 6.6, 6.4, 6.3, 6.5, 6.7, 6.6, 6.8, 6.9, 7.0, 6.8, 6.7], 
    valor_total: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], 
  };
};

const Chart = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedDataKey, setSelectedDataKey] = useState('temperatura');  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChartData();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };
    fetchData();
  }, []);

  const sortMonths = (data) => {
    return data.sort((a, b) => a - b);
  };

  const monthNames = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro',
  };

  const handleDataFilter = (dataKey) => {
    setSelectedDataKey(dataKey);
  };

  return (
    <ChartContainer>
      {chartData ? (
        <>
          <ButtonContainer>
            <FilterButton
              onClick={() => handleDataFilter('temperatura')}
              className={selectedDataKey === 'temperatura' ? 'active' : ''}
            >
              Temperatura
            </FilterButton>
            <FilterButton
              onClick={() => handleDataFilter('ph')}
              className={selectedDataKey === 'ph' ? 'active' : ''}
            >
              pH
            </FilterButton>
            <FilterButton
              onClick={() => handleDataFilter('valor_total')}
              className={selectedDataKey === 'valor_total' ? 'active' : ''}
            >
              Valor Total
            </FilterButton>
          </ButtonContainer>
          <ReactApexChart
            options={{
              chart: {
                type: 'area',
                toolbar: {
                  show: true,
                },
                zoom: {
                  enabled: true,
                },
              },
              xaxis: {
                categories: sortMonths(chartData.mes_referencia).map(
                  (month) => monthNames[month]
                ),
              },
              fill: {
                colors: ['#007bff'],
                opacity: 0.2,
              },
              stroke: {
                width: 3,
                colors: ['#0056b3'],
              },
              tooltip: {
                theme: 'light',
              },
            }}
            series={[{
              name: selectedDataKey,
              data: chartData[selectedDataKey],
            }]}
            type="area"
            height={350}
            width={600}
          />
        </>
      ) : (
        <p>Loading chart data...</p>
      )}
    </ChartContainer>
  );
};

export default Chart;
