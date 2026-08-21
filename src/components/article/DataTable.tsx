import styles from "./DataTable.module.css";

export interface DataTableProps {
  headers: string[];
  rows: { cells: string[] }[];
}

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.cells.map((c, j) => (
                // eslint-disable-next-line react/no-danger
                <td key={j} dangerouslySetInnerHTML={{ __html: c }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
