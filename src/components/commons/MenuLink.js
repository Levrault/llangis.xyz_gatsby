import CommonLink from './link';

const MenuLink = CommonLink.extend`
  position: relative;
  text-align: center;
  width: 75px;
  z-index: 20;

  @media (max-width: 700px) {
    width: auto;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -22px;
    left: 50%;
    right: 50%;
    height: 1px;
    background: #4078c0;
    transition: all ease .5s;
  } 

  &:hover {
    color: #4078c0;
    &:after {
      left: 0;
      right: 0;
      height: 5px;
    }
  } 

  &:before {
    position: absolute;
    transform: translateX(-100%);
    left: -10px;
    color: #eee;
    opacity: .3;
    font-size: 8px;
  }
`;

export default MenuLink;
