import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.customColor ? props.customColor : 'deepskyblue'};
  min-width: 80px;
  height: 30px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }
`

export default Button