import { useState, useEffect } from 'react'
import FormPenderita from '../../components/DataIndividu/FormPenderita'
import TablePenderita, {
  Data,
} from '../../components/DataIndividu/TablePenderita'
import { renameKeys } from '../../helpers/utils'
import { Container } from './styles'

export default function Home() {
  const [result, setResult] = useState([])
  const defaultValue: Data = {
    nama: '',
    nik: null,
    noRekamMedis: '',
    namaIbuKandung: '',
    jenisKelamin: '',
    tanggalLahir: null,
    usia: null,
    statusPernikahan: '',
    pendidikan: '',
    pekerjaan: '',
    suku: '',
    alamatLengkap: '',
    alamatKtp: '',
    tinggalWilkerPkm: '',
    latitude: null,
    longitude: null,
    noHp: null,
    kategoriKasus: '',
    pasienBaru: '',
    jenisKegiatan: '',
    lainnya: '',
    createdDate: '',
    modifiedDate: '',
  }
  const [dataSelection, setDataSelection] = useState<Data>(defaultValue)
  useEffect(() => {
    window.Main.send('SELECT * FROM master_penderita').then((result: any) => {
      const data = result.map((item: any) => {
        item = renameKeys(item)
        return item
      })
      console.log(data)

      setResult(data)
    })
  }, [])

  const handleRowClick = (data: Data) => {
    console.log(data)

    setDataSelection(data)
    console.log(dataSelection)
  }

  return (
    <Container>
      <FormPenderita row={dataSelection} />
      <TablePenderita rows={result} onRowClick={handleRowClick} />
    </Container>
  )
}
