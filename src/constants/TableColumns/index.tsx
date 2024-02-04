import { Button, TableColumnType } from "antd";

type LeaderboardDataType = {
  key: string;
  rank: string;
  name: string;
  academic: string;
  competition: string;
  organization: string;
  total: number;
};

const TableColumns: TableColumnType<LeaderboardDataType>[] = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Academic",
    dataIndex: "academic",
    key: "academic",
  },
  {
    title: "Competition",
    dataIndex: "competition",
    key: "competition",
  },
  {
    title: "Organization",
    dataIndex: "organization",
    key: "organization",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "",
    key: "",
    render: () => <Button>Lihat Detail</Button>,
  },
] as const;

export default TableColumns;
