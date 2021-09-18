import { useState, ChangeEvent, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Data } from '../TablePenderita'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)
interface FormPenderitaProps {
  row: Data
}
export default function FormPenderita(props: FormPenderitaProps) {
  const { row } = props
  const classes = useStyles()
  const [formData, setFormData] = useState<Data>(row)

  const handleChange = (
    event: ChangeEvent<{ value: unknown }>,
    key: string
  ) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: event.target.value,
    }))
  }

  const handleDatePickerChange = (
    event: MaterialUiPickersDate,
    key: string
  ) => {
    console.log(event)

    setFormData(prevState => ({
      ...prevState,
      [key]: event,
    }))
  }

  useEffect(() => {
    setFormData(row)
  }, [row])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          error={false}
          label="Nama"
          value={formData.nama || ''}
          onChange={e => handleChange(e, 'nama')}
        />
        <TextField
          error={false}
          label="NIK"
          value={formData.nik || ''}
          onChange={e => handleChange(e, 'nik')}
        />
        <TextField
          error={false}
          label="No Rekam Medis"
          value={formData.noRekamMedis || ''}
          onChange={e => handleChange(e, 'noRekamMedis')}
        />
        <TextField
          error={false}
          label="Nama Ibu Kandung"
          value={formData.namaIbuKandung || ''}
          onChange={e => handleChange(e, 'namaIbuKandung')}
        />
        <FormControl className={classes.formControl}>
          <InputLabel>Jenis Kelamin</InputLabel>
          <Select
            label="Jenis Kelamin"
            value={formData.jenisKelamin || ''}
            onChange={e => handleChange(e, 'jenisKelamin')}
          >
            <MenuItem value="LAKI-LAKI">LAKI-LAKI</MenuItem>
            <MenuItem value="PEREMPUAN">PEREMPUAN</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <DatePicker
          value={formData.tanggalLahir || null}
          format="DD/MM/YYYY"
          label="Tanggal Lahir"
          onChange={e => handleDatePickerChange(e, 'tanggalLahir')}
        />
      </div>
    </form>
  )
}
