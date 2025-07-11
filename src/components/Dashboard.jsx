import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/GCSDaily.xlsx")
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: "buffer" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
      });
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">GCS Daily - OEE Trend</h2>
      <LineChart width={900} height={400} data={data}>
        <XAxis dataKey="DATE" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="OEE" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Dashboard;
