import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(Paper)`
  height: calc(100vh - 48px);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &.MuiPaper-root {
    background-color: #f4f9fd;
  }
`
