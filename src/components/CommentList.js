import React, { useState, useEffect, useRef} from 'react'
//import Data from './Data.json'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
    

export default function CommentList  () {
   // const [selectedProducts, setSelectedProducts] = useState(null);
    const [data, setData] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        async function getData() {
          await axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
              
              console.log(response.data);
              setData(response.data);
            
              setLoadingData(false);
            });
        }
         if (loadingData) {
          
          getData();
         }
     });

  const header = (
    <div className="table-header">
        <h5 className="p-mx-0 p-my-1">Data</h5>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
);


return (
    <div className="datatable-crud-demo">
        <Toast ref={toast} />

        <div className="card">          

            <DataTable ref={dt}  value={data}
                dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                <Column field="postId" header="Post ID" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="id" header="ID" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="email" header="Email"  sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="body" header="Body" sortable style={{ minWidth: '10rem' }}></Column>
                
            </DataTable>
        </div>
    </div>
)
}
