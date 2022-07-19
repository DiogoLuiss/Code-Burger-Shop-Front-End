import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  padding: 20px;
`

export const Img = styled.img`
  width: 80px;
  border-radius: 5px;
`
export const EditIcons = styled(EditIcon)`
  cursor: pointer;

  :hover {
    color: blue;
  }
`
