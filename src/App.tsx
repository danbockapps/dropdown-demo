import { DropDownBox, TreeView } from "devextreme-react";
import React, { FC, useState } from "react";
import "./App.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

let initialdataSource: { id: number; name: string; selected: boolean }[] = [];

for (let i = 0; i < 50; i++) {
  initialdataSource.push({ id: i, name: `Option ${i}`, selected: false });
}

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const dataSource = initialdataSource.map((e) => ({
    ...e,
    selected: selectedItems.includes(e.id),
  }));

  const TreeViewRender: FC = () => (
    <TreeView
      dataSource={dataSource}
      keyExpr="id"
      displayExpr="name"
      selectionMode="multiple"
      showCheckBoxesMode="normal"
      onItemSelectionChanged={(e) =>
        setSelectedItems(e.component?.getSelectedNodeKeys() || [])
      }
    />
  );

  return (
    <DropDownBox
      dataSource={dataSource}
      value={selectedItems}
      valueExpr="id"
      displayExpr="name"
      contentRender={TreeViewRender}
    />
  );
}

export default App;
