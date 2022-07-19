import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/FormatDate'
import status from './order-status'
import Row from './row'
import { Container, Menu, LinkMenu } from './styled'

function Orders() {
  const [Orders, setOrders] = useState([])

  const [filteredOrders, setfilteredOrders] = useState([])
  const [ActiveStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('order')

      setOrders(data)
      setfilteredOrders(data)
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order))
    setRows(newRows)
  }, [filteredOrders])

  function handleStatus(status) {
    if (status.id === 1) {
      setfilteredOrders(Orders)
    } else {
      const newOrders = Orders.filter((order) => order.status === status.value)
      setfilteredOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  useEffect(() => {
    if (ActiveStatus === 1) {
      setfilteredOrders(Orders)
    } else {
      const statusIndex = status.findIndex((sts) => sts.id === ActiveStatus)
      const newFilterOrders = Orders.filter(
        (order) => order.status === status[statusIndex].valeu
      )
      setfilteredOrders(newFilterOrders)
    }
  }, [Orders])

  return (
    <Container>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              onClick={() => handleStatus(status)}
              key={status.id}
              IsActiveStatus={ActiveStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data de Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                Orders={Orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
