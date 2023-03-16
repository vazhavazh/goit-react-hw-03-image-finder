import PropTypes from "prop-types"
import { Button } from './ButtonLoadMoreStyled';

export const ButtonLoadMore = ({ onClick }) => {
  return <Button onClick={onClick} />;
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired
}