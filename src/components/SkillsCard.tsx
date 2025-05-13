import React, {useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface Config {
  colors: {
    cardColor: string;
    headingColor: string;
    textMuted: string;
    bodyColor: string;
    borderColor: string;
  };
  colors_dark: {
    cardColor: string;
    headingColor: string;
    textMuted: string;
    bodyColor: string;
    borderColor: string;
  };
}

interface Props {
  isDarkStyle: boolean;
  config: Config;
  isRtl: boolean;
}

const SkillsCard: React.FC<Props> = (/* { isDarkStyle, config, isRtl } */) => {
  const purpleColor = '#836AF9';
  const yellowColor = '#ffe800';
  const cyanColor = '#28dac6';
  const orangeColor = '#FF8132';
  const oceanBlueColor = '#299AFF';
  const greyColor = '#4F5D70';

  const [arabic,/* setArabic */]=useState(true);

  // const cardColor = isDarkStyle ? config.colors_dark.cardColor : config.colors.cardColor;
  // const headingColor = isDarkStyle ? config.colors_dark.headingColor : config.colors.headingColor;
  // const labelColor = isDarkStyle ? config.colors_dark.textMuted : config.colors.textMuted;
  // const legendColor = isDarkStyle ? config.colors_dark.bodyColor : config.colors.bodyColor;
  // const borderColor = isDarkStyle ? config.colors_dark.borderColor : config.colors.borderColor;

  const data = {
    labels1: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
    labels: ['أفريقيا', 'آسياء', 'أوروبا', 'أمريكا', 'القطبية الجنوبية', 'أستراليا'],
    datasets: [
      {
        label1: 'Population (millions)',
        label: 'عدد السكان (مليون)',
        backgroundColor: [purpleColor, yellowColor, orangeColor, oceanBlueColor, greyColor, cyanColor],
        data: [19, 17.5, 15, 13.5, 11, 9],
        borderWidth: 0,
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   animation: {
  //     duration: 500,
  //   },
  //   scales: {
  //     r: {
  //       ticks: {
  //         display: false,
  //         color: labelColor,
  //       },
  //       grid: {
  //         display: false,
  //       },
  //     },
  //   },
  //   plugins: {
  //     tooltip: {
  //       rtl: isRtl,
  //       backgroundColor: cardColor,
  //       titleColor: headingColor,
  //       bodyColor: legendColor,
  //       borderWidth: 1,
  //       borderColor: borderColor,
  //     },
  //     legend: {
  //       rtl: isRtl,
  //       position: 'right',
  //       labels: {
  //         usePointStyle: true,
  //         padding: 25,
  //         boxWidth: 8,
  //         boxHeight: 8,
  //         color: legendColor,
  //       },
  //     },
  //   },
  // };

  return (
    <div className="card">
      <div className="card-header header-elements">
        <h5 className="card-title mb-0"> {arabic  ? " متوسط " : "Average Skills"} </h5>
        <div className="card-header-elements ms-auto py-0 dropdown">
          <button
            type="button"
            className="btn dropdown-toggle hide-arrow p-0"
            id="heat-chart-dd"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bx bx-dots-vertical-rounded"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="heat-chart-dd">
            <a className="dropdown-item" href="javascript:void(0);"> {arabic  ? " أخر 10 أيام " : " Last 10 Days"} </a>
            <a className="dropdown-item" href="javascript:void(0);"> {arabic  ? " أخر شهر " : "Last Month"} </a>
            <a className="dropdown-item" href="javascript:void(0);">  {arabic  ? " أخر سنة " : "Last Year"} </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <PolarArea data={data} /* options={options}  */ />
      </div>
    </div>
  );
};

export default SkillsCard;