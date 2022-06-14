import React, { useMemo, useState } from 'react';
import Icon1 from '../../../../assets/icons/Moni in.svg';
import Icon2 from '../../../../assets/icons/Moni out.svg';
import Icon3 from '../../../../assets/icons/Deposit.svg';
import Icon4 from '../../../../assets/icons/Withdrawals.svg';
import DataTable from 'react-data-table-component';
import { FilterComponent } from '../FilterTable';
import { ModalDetailTransaction } from '../ModalDetailTransaction';
import { Button } from './styles';
import { Row } from 'app/components/Forms/styles';

export const TableTransaction = () => {
  const columns = [
    {
      name: 'tipo',
      cell: row => <img src={row.image} alt="" />,
      right: true,
    },
    {
      name: '',
      selector: row => row.operacion,
      sortable: true,
      left: true,
    },
    {
      name: 'Fecha y hora',
      selector: row => `${row.fecha} ${row.hora}`,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.estado,
      sortable: true,
    },
    {
      name: 'Monto',
      selector: row => `$ ${row.precio}.00`,
      sortable: true,
      right: true,
    },
    {
      cell: () => <Button onClick={handleButtonClick}>mas detalle</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const TransactionsList = [
    {
      id: '1',
      image: Icon1,
      operacion: 'Venta',
      estado: 'Fallida',
      precio: '234544',
      fecha: '03/02/2026',
      hora: '12:00hs',
      color: 'fail',
    },
    {
      id: '2',
      image: Icon1,
      operacion: 'Deposito',
      estado: 'En Revision',
      precio: '888850',
      fecha: '03/02/2026',
      hora: '',
      color: 'paid',
    },
    {
      id: '3',
      image: Icon3,
      operacion: 'Compra',
      estado: 'En Proceso',
      fecha: '03/02/2026',
      precio: '23455',
      hora: '',
      color: 'glow',
    },
    {
      id: '4',
      image: Icon4,
      operacion: 'Venta',
      estado: 'Aprovado',
      fecha: '03/02/2026',
      hora: '12:00hs',
      precio: '986655',
      color: 'paid',
    },
    {
      id: '5',
      image: Icon2,
      operacion: 'Deposito',
      estado: 'En Revision',
      precio: '99455',
      fecha: '03/02/2026',
      hora: '',
      color: 'paid',
    },
    {
      id: '6',
      image: Icon1,
      operacion: 'Deposito',
      estado: 'En Revision',
      precio: '23455',
      fecha: '03/02/2026',
      hora: '',
      color: 'paid',
    },
  ];

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const filteredItems = TransactionsList.filter(
    item =>
      item.operacion &&
      item.operacion.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
      <ModalDetailTransaction
        openModal={isOpen}
        closeModal={setIsOpen}
        titleDetailTransaction={'Transaccion'}
        descriptionDetailTransaction={'detalle transaccion'}
        labelButton={'Volver a la tabla'}
        isVisibleButonSuport={false}
      />
      <DataTable
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        columns={columns}
        data={filteredItems}
        pagination
      />
    </>
  );
};
