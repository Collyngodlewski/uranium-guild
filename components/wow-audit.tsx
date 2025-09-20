"use client";

import { useEffect, useState } from "react";

const SHEET_ID = "19hLRsoqxsB98MFzYoLOLTAUYexMfApq4WiCOJdvoXKw";
const API_KEY = "AIzaSyCwSEMPGds8M5PtUIeJl2iSZ38XFI65BeA";
const RANGES = ["Summary!C7:F37", "Summary!Q7:S37", "Summary!AB7:AD37"]; // Add as many ranges as you need

export default function WowAudit() {
  const [data, setData] = useState<string[][][]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const allData: string[][][] = [];
    for (const range of RANGES) {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
      const res = await fetch(url);
      const result = await res.json();
      allData.push(result.values || []);
    }
    setData(allData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    //  className="overflow-y-scroll"
    <div>
      {/* <h2>WoW Audit</h2> */}
      <button
        className="mb-4 px-3 py-1 bg-green-600 text-white rounded"
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? "Refreshing..." : "Refresh Data"}
      </button>
      <div className="flex gap-5">
      {data.length === 0 ? (
        <div>Loading or no data found.</div>
      ) : (
        data.map((sheetData, idx) => {
          const headers = sheetData[0] || [];
          const rows = sheetData.slice(1);
          return (
            <div key={idx} className="mb-8 w-[50%]">
              {/* <h3 className="font-bold mb-2">Range: {RANGES[idx]}</h3> */}
              <table className="min-w-full border border-gray-300 rounded">
                <thead>
                  <tr>
                    {headers.map((header, hIdx) => (
                      <th key={hIdx} className="px-2 py-1 border-b text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b">
                      {row.map((cell, cIdx) => {
                        const header = headers[cIdx];
                        // console.log("Header:", header, "Cell:", cell);
                        let cellClass = "px-2 py-1";
                       if (cIdx === row.length - 1) {
                        const num = Number(cell);
                         if (!isNaN(num)) {
                            if (num >= 0 && num <= 3) {
                                cellClass += " text-red-600";
                            } else if (num >= 4 && num <= 7) {
                                cellClass += " text-yellow-500";
                            } else if (num >= 8 && num <= 50) {
                                cellClass += " text-green-600";
                            }
                            }
                    }
                    return (
                        <td key={cIdx} className={cellClass}>{cell}</td>
                    );
                        })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })
      )}
      </div>
    </div>
  );
}






