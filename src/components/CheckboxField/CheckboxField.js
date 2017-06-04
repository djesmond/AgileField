import React from 'react';
import PropTypes from 'prop-types';

import bindState, { FieldPropTypes } from '../../bindState';

const CheckboxProptypes = {
  ...FieldPropTypes,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

};
const CheckboxDefaultProps = {
  label: 'Checkbox',
  id: 'checkbox',
  value: '',
};
const Checkbox = props =>
  (
    <div>
      <input
        type="checkbox"
        id={props.id}
        value={props.state.value}
        onChange={props.onChange}
        checked={props.state.state === 'checked'}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
Checkbox.propTypes = CheckboxProptypes;
Checkbox.defaultProps = CheckboxDefaultProps;
const bindStateProps = {
  initialState: {
    state: 'unchecked',
    value: 'checkbox',
    isValid: true,
    message: '',
  },
  setStateUpdater: (prevState, props) => ({ state: prevState.state === 'checked' ? 'unchecked' : 'checked' }),
};

export default bindState(bindStateProps)(Checkbox);

