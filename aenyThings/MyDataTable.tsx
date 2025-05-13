import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

DataTable.use(DT);

const MyDataTable: React.FC = () => {
  const data = [
    { name: 'John Doe', location: 'New York' },
    { name: 'Jane Smith', location: 'Los Angeles' },
    { name: 'Sam Green', location: 'Chicago' },
  ];

  const columns = [
    { title: 'Name', data: 'name' },
    { title: 'Location', data: 'location' },
  ];

  return (
    <div>
      <DataTable
        data={data}
        columns={columns}
        options={{
          paging: true,
          searching: true,
          ordering: true,
        }}
      />
    </div>
  );
};

export default MyDataTable;