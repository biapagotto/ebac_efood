import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantCard = styled.div`
  border: 1px solid ${cores.coral};
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  h3 {
    margin: 10px;
    font-size: 1.2em;
  }
  p {
    margin: 0 10px;
    font-size: 0.9em;
  }
  span {
    display: block;
    margin: 10px;
    font-weight: bold;
  }
  .highlight {
    background-color: ${cores.coral};
    color: ${cores.branca};
    padding: 5px;
    text-align: center;
    font-weight: bold;
  }
`

export const ListTwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`

export const ListThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
`
