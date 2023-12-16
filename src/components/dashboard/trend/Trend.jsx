import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Chart } from 'primereact/chart';

import { formatBulanTahun } from '../../tools/FormatDate';
import style from './trend.module.css';

const Trend = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [dataGraph, SetDataGraph] = useState([300, 50, 100, 200]);
    const [startDate, setStartDate] = useState(null);

    const dateStartRef = useRef();

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            // labels: ['A', 'B', 'C', 'Lain-lainnya'],
            datasets: [
                {
                    data: dataGraph,
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--red-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--red-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, [dataGraph]);

    return (
        <div className={style.trendWrapper}>
            <div className={style.title}>
                <h3>Trend Bulan {formatBulanTahun(startDate)}</h3>
                <input type="date" name="date" id="date" className={style.btn_date}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className={style.infoTrend}>
                <div className={style.chartWrapper}>
                    <Chart type="doughnut" data={chartData} options={chartOptions} className={`w-full md:w-30rem ${style.chart}`} />
                    <p style={{ fontWeight: "bold" }}>Total Revenue : Rp 200.000.000,00,-</p>
                </div>
                <div className={style.dataChart}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Persentase</th>
                                <th>Unit Terproduksi</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Flight Attendent Training</td>
                                <td>45%</td>
                                <td>225</td>
                                <td>Rp 3.000.000,00,-</td>
                            </tr>
                            <tr>
                                <td>Flight Attendent Training</td>
                                <td>45%</td>
                                <td>225</td>
                                <td>Rp 3.000.000,00,-</td>
                            </tr>
                            <tr>
                                <td>Flight Attendent Training</td>
                                <td>45%</td>
                                <td>225</td>
                                <td>Rp 3.000.000,00,-</td>
                            </tr>
                            <tr>
                                <td>Flight Attendent Training</td>
                                <td>45%</td>
                                <td>225</td>
                                <td>Rp 3.000.000,00,-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Trend