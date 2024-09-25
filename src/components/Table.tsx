import { Section } from "../styles/styled-components/Section";

interface ITableProps {
  headers: string[];
  data: string[][];
}

export const Table = (props: ITableProps) => {
  const headers = props.headers.map((column, index) => {
    return <th key={`headCell-${index}`}>{column}</th>;
  });

  const temp = props.data.map((d, index1) => {
    return (
      <tr key={`rowCell-${index1}`}>
        {d.map((row, index2) => {
          return <td key={`cell-${index1}-${index2}`} style={{ border: "1px solid grey" }}>{row}</td>;
        })}
      </tr>
    );
  });

  return (
    <Section>
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{temp}</tbody>
      </table>
    </Section>
  );
};
