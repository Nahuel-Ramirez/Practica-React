import styled from "styled-components";
import PropTypes from "prop-types";

const baseWidht = 8.333333;
export const Col = styled.div`
  max-widht: ${(props) => props.size * baseWidht}%;
  --webkit-box-flex: 0;
  flex: 0 ${(props) => `ms-flex : 0 0 ${props.size * baseWidht}%`};
  ${(props) => `flex: 0 0 ${props.size * baseWidht}%`};
`;

Col.defaultProps = {
  size: 12,
};

Col.propTypes = {
  size: PropTypes.number,
};
