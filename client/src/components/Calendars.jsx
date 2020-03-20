import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import CalendarMonthContainer from './CalendarMonth/CalendarMonth';

export class Calendars extends Component {
  constructor(props) {
    super(props);
    const { selectedMonth } = this.props;
    this.state = {
      currentMonth: selectedMonth,
    };
  }

  render() {
    const { currentMonth } = this.state;
    return (
      <div>
        <CalendarMonthContainer
          month={currentMonth}
        />
        <CalendarMonthContainer
          month={moment(currentMonth).add(1, 'month').format('YYYY-MM')}
        />
      </div>
    );
  }
}

Calendars.propTypes = {
  selectedMonth: PropTypes.string,
};

Calendars.defaultProps = {
  selectedMonth: moment().startOf('month').format('YYYY-MM'), // Default to real life month
};

const mapStateToProps = ({ checkinDay }) => ({
  selectedMonth: moment(checkinDay).format('YYYY-MM'),
});

export default connect(mapStateToProps)(Calendars);