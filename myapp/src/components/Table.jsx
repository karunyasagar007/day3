import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Table = () => {
  return (
      <div>  
          <br /><br />
          <TableContainer>
              <TableHead>
                  <TableRow>
                      <TableCell>NO</TableCell>
                      <TableCell>NAME</TableCell>
                      <TableCell>COURSE</TableCell>
                      <TableCell>FEE</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Karunya</TableCell>
                      <TableCell>MSc.CS</TableCell>
                      <TableCell>23000</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Anjali</TableCell>
                      <TableCell>MBA</TableCell>
                      <TableCell>30000</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Varsha</TableCell>
                      <TableCell>M.Com</TableCell>
                      <TableCell>18000</TableCell>
                  </TableRow>
              </TableBody>
        </TableContainer>
    </div>
  )
}

export default Table