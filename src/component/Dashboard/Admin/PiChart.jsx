import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const PiChart = ({ maleUser, femaleUser, totalUser, premiumUser}) => {
    
  const otherUsers = totalUser - premiumUser;
  console.log(maleUser, femaleUser, totalUser, premiumUser);


  const data = [
    { value: maleUser, label: 'Male' },
    { value: femaleUser, label: 'Female' },
    { value: premiumUser, label: 'Premium' },
    { value: maleUser+femaleUser, label: 'Total' },
  ];

  const size = {
    width: 500,
    height: 300,
  };

  return (
    <PieChart

      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: '',
          typography: {
            fontSize: 12, 
          },
        },
        
      }}
      {...size}
    />
  );
};

export default PiChart;
