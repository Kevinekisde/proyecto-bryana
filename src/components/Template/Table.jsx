import React from 'react'
import { Table as AntdTable } from 'antd'
import { useResizeDetector } from 'react-resize-detector'

const Table = ({ columns, loading, data, rowSelection }) => {

    const { ref, height } = useResizeDetector()

    return (
        <div ref={ref} className="h-[calc(100vh-142px)] md:h-[calc(100vh-220px)] lg:h-[calc(100vh-180px)]">
            <AntdTable
                size="small"
                rowKey="key"
                columns={rowSelection ? columns?.concat(AntdTable.SELECTION_COLUMN) : columns}
                dataSource={data}
                pagination={{
                    position: ['bottomCenter'],
                    pageSize: 15,
                    size: 'default'
                }}
                locale={{ emptyText: false ? 'Cargando' : 'No se han encontrado registros' }}
                scroll={{ y: isNaN(height) ? 200 : height - 90 }}

            // {...(rowSelection && {
            //     rowSelection: {
            //         columnWidth: 80,
            //         onChange: (selectedRowKeys, selectedRows) => rowSelection(selectedRowKeys, selectedRows)
            //     }
            // })}
            />
        </div>
    )
}

export default Table