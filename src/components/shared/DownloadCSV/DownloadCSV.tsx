import { FC, useState } from "react";
import { Planet } from "../PlanetCard/PlanetCard.model";
import { Button } from "../Button";

interface DownloadCSVProps {
  data: Planet[];
  fileName: string;
}

export const DownloadCSV: FC<DownloadCSVProps> = ({ data, fileName }) => {
  const [url, setUrl] = useState<string>("");

  const convertToCSV = (objArray: Planet[]) => {
    const array =
      typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
    let str = "";

    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (const index in array[i]) {
        if (line !== "") line += ",";

        line += array[i][index];
      }
      str += line + "\r\n";
    }
    return str;
  };

  const downloadCSV = () => {
    const csvData = new Blob([convertToCSV(data)], { type: "text/csv" });
    const csvURL = URL.createObjectURL(csvData);
    setUrl(csvURL);
  };

  return (
    <a
      href={url}
      title="Download CSV"
      className="main-button"
      download={`${fileName}.csv`}>
      <Button type="primary" onClick={downloadCSV} text="Download" />
    </a>
  );
};
