class DetailedWeatherPanel extends React.Component {
  render () {
    return (
      <div>
        <div>Temperature: {this.props.temperature}</div>
        <div>Icon: {this.props.icon}</div>
        <div>Summary: {this.props.summary}</div>
        <div>Precip Prob: {this.props.precipProb}</div>
      </div>
    );
  }
}

DetailedWeatherPanel.propTypes = {
  temperature: React.PropTypes.number,
  icon: React.PropTypes.string,
  summary: React.PropTypes.string,
  precipProb: React.PropTypes.number
};
