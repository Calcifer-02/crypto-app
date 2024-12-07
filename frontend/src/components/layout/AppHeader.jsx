import { Layout, Select, Space, Button, Modal, Drawer } from "antd";
import { useCrypto } from "../../context/crypto-context";
import { useState, useEffect } from "react";
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";
const headerStyle = {
   width: "100%",
   textAlign: "center",

   height: 60,
   padding: "1rem",
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
};

const handleChange = (value) => {
   console.log(`selected ${value}`);
};

// const options = [
//    {
//       value: "jack",
//       label: "Jack",
//       emoji: "😀",
//       desc: "Jack is a normal man",
//    },
//    {
//       value: "lucy",
//       label: "Lucy",
//       emoji: "🤪",
//       desc: "Lucy is a normal girl",
//    },
//    {
//       value: "tom",
//       label: "Tom",
//       emoji: "😎",
//       desc: "Tom is a normal boy",
//    },
// ];

export default function AppHeader() {
   const { crypto } = useCrypto();
   const [select, setSelect] = useState(false);
   const [coin, setCoin] = useState(null);
   const [modal, setModal] = useState(false);
   const [drawer, setDrawer] = useState(false);

   useEffect(() => {
      const keypress = (e) => {
         if (e.key === "/") {
            setSelect((prev) => !prev);
         }
      };
      document.addEventListener("keypress", keypress);

      return () => document.removeEventListener("keypress", keypress);
   }, []);
   function handleSelect(value) {
      setCoin(crypto.find((c) => c.id === value));
      setModal(true);
   }

   return (
      <Layout.Header style={headerStyle}>
         <Select
            open={select}
            onSelect={handleSelect}
            onClick={() => setSelect((prev) => !prev)}
            style={{ width: 250 }}
            value="press / to open"
            options={crypto.map((coin) => ({
               label: coin.name,
               value: coin.id,
               icon: coin.icon,
            }))}
            optionRender={(option) => (
               <Space>
                  <img
                     style={{ width: 24 }}
                     src={option.data.icon}
                     alt={option.data.label}
                  />
                  {""}
                  {option.data.label}
               </Space>
            )}
         ></Select>
         <Button type="primary" onClick={() => setDrawer(true)}>
            Add asset
         </Button>

         <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
            <CoinInfoModal coin={coin} />
         </Modal>

         <Drawer
            destroyOnClose
            width={600}
            title="Add asset"
            onClose={() => setDrawer(false)}
            open={drawer}
         >
            <AddAssetForm onClose={() => setDrawer(false)} />
         </Drawer>
      </Layout.Header>
   );
}
