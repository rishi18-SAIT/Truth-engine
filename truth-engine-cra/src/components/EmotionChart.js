import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmotionChart = ({ emotions }) => {
  const data = {
    labels: Object.keys(emotions),
    datasets: [
      {
        label: 'Public Emotions',
        data: Object.values(emotions),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ccc', '#4bc0c0'],
      },
    ],
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>Emotion Analysis</h3>
      <Pie data={data} />
    </div>
  );
};

export default EmotionChart;
