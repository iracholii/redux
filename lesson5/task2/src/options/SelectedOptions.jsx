import { connect } from 'react-redux';
import Options from './Options.jsx';
import { selectedOptionsSelector } from './options.selectors.js';
import { toggleOption } from './options.actions.js';

const mapState = state => ({
  options: selectedOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
