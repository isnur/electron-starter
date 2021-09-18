import { useState, useEffect, SyntheticEvent } from 'react'
import {
  DataGrid,
  GridRowParams,
  GridToolbar,
  MuiEvent,
} from '@mui/x-data-grid'

export interface Data {
  nama: string
  nik: number | null
  noRekamMedis: string
  namaIbuKandung: string
  jenisKelamin: string
  tanggalLahir: number | null
  usia: number | null
  statusPernikahan: string
  pendidikan: string
  pekerjaan: string
  suku: string
  alamatLengkap: string
  alamatKtp: string
  tinggalWilkerPkm: string
  latitude: number | null
  longitude: number | null
  noHp: number | null
  kategoriKasus: string
  pasienBaru: string
  jenisKegiatan: string
  lainnya: string
  createdDate: string
  modifiedDate: string
}

export interface TablePenderitaProps {
  rows: Data[]
  onRowClick: (data: Data) => void
}

const headCells = [
  {
    field: 'nama',
    headerName: 'Nama',
    minWidth: 150,
  },
  {
    field: 'nik',
    headerName: 'NIK',
    minWidth: 150,
  },
  {
    field: 'noRekamMedis',
    headerName: 'No Rekam Medis',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'namaIbuKandung',
    headerName: 'Nama Ibu Kandung',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'jenisKelamin',
    headerName: 'Jenis Kelamin',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'tanggalLahir',
    headerName: 'Tanggal Lahir',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'usia',
    headerName: 'Usia',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'statusPernikahan',
    headerName: 'Status Pernikahan',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'pendidikan',
    headerName: 'Pendidikan',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'pekerjaan',
    headerName: 'Pekerjaan',
    sortable: false,
    minWidth: 150,
  },
  {
    field: 'suku',
    headerName: 'Suku',
    sortable: false,
    hide: true,
    minWidth: 50,
  },
  {
    field: 'alamatLengkap',
    headerName: 'Alamat Lengkap',
    sortable: false,
    hide: true,
    minWidth: 100,
  },
  {
    field: 'alamatKtp',
    headerName: 'Alamat KTP',
    sortable: false,
    minWidth: 100,
  },
  {
    field: 'tinggalWilkerPkm',
    headerName: 'Tinggal Wilker Pkm',
    sortable: false,
    minWidth: 100,
  },
  {
    field: 'latitude',
    headerName: 'Latitude',
    sortable: false,
    hide: true,
    minWidth: 50,
  },
  {
    field: 'longitude',
    headerName: 'Longitude',
    sortable: false,
    hide: true,
    minWidth: 50,
  },
  {
    field: 'noHp',
    headerName: 'No HP',
    sortable: false,
    hide: true,
    minWidth: 50,
  },
  {
    field: 'kategoriKasus',
    headerName: 'Kategori Kasus',
    sortable: false,
    hide: true,
    minWidth: 100,
  },
  {
    field: 'pasienBaru',
    headerName: 'Pasien Baru',
    sortable: false,
    hide: true,
    minWidth: 50,
  },
  {
    field: 'jenisKegiatan',
    headerName: 'Jenis Kegiatan',
    sortable: false,
    hide: true,
    minWidth: 100,
  },
  {
    field: 'lainnya',
    headerName: 'Lainnya',
    sortable: false,
    hide: true,
    minWidth: 50,
  },
  {
    field: 'createdDate',
    headerName: 'Created Date',
    hide: true,
    minWidth: 50,
  },
  {
    field: 'modifiedDate',
    headerName: 'Modified Date',
    hide: true,
    minWidth: 50,
  },
]

export default function TablePenderita(props: TablePenderitaProps) {
  const { rows, onRowClick } = props
  const [data, setData] = useState<Data[]>(rows)
  const [pageSize, setPageSize] = useState<number>(5)

  useEffect(() => {
    setData(rows)
  }, [rows])

  const handleRowClick = (
    params: GridRowParams,
    event: MuiEvent<SyntheticEvent<Element, Event>>,
    details?: any
  ) => {
    console.log(params)
    onRowClick(params.row as Data)
  }

  return (
    <div style={{ height: '50%', width: '100%', background: 'white' }}>
      <DataGrid
        columns={headCells}
        rows={data}
        getRowId={r => r.nik}
        components={{
          Toolbar: GridToolbar,
        }}
        density="compact"
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        onRowClick={handleRowClick}
      />
    </div>
  )
}
