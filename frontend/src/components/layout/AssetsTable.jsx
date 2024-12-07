import { Table } from "antd";
import { useCrypto } from "../../context/crypto-context";
const columns = [
   {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
   },
   {
      title: "Price, $",
      dataIndex: "price",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
   },
   {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
   },
];
const data = [
   {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
   },
   {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
   },
   {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
   },
   {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
   },
];

export default function AssetsTable() {
   const { assets } = useCrypto();

   const data = assets.map((asset) => {
      return {
         key: asset.id,
         name: asset.name,
         price: asset.price.toFixed(2),
         amount: asset.amount.toFixed(2),
      };
   });

   return (
      <div>
         <Table pagination={false} columns={columns} dataSource={data} />
      </div>
   );
}
