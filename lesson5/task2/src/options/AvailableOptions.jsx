import { connect } from 'react-redux';
import { toggleOption } from './options.actions.js';
import Options from './Options.jsx';
import { availableOptionsSelector } from './options.selectors.js';

const mapState = state => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
