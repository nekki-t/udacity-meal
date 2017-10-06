import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        Hello World
      </div>

    )
  }
}

function mapStateToProps (calendar) {
  const dayOrder = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  return {
    calendar: dayOrder.map((day) => ({
      day,
        meals: Object.keys(calendar[day])
          .reduce((meals, meal) => {
            meals[meal] = calendar[day][meal]
            ? calendar[day][meal]
              : null;
            return meals
          }, {})
    }

    ))
  }
}


export default connect(mapStateToProps)(App)
