class WeatherPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ""};
  }

  loadWeatherData(){
    $.ajax({
      url: '/weather',
      dataType: 'json',
      type: 'POST',
      data: {latitude: this.props.latitude, longitude: this.props.longitude},
      cache: false,
      success: function(data) {
        this.setState({temperature: data.currently.temperature, icon: data.currently.icon, summary: data.currently.summary, chanceOfRain: data.currently.precipProbability * 100});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadWeatherData();
  }

  render () {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-header">
            <div className="panel-body">
              <h2>{this.props.cityName}</h2>
              <div>Temperature: {this.state.temperature}</div>
              <div>Icon: {this.state.icon}</div>
              <div>Summary: {this.state.summary}</div>
              <div>Chance of Rain: {this.state.chanceOfRain}%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeatherPanel.propTypes = {
  cityName: React.PropTypes.string,
  temperature: React.PropTypes.number,
  icon: React.PropTypes.string,
  summary: React.PropTypes.string,
  chanceOfRain: React.PropTypes.number,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number
};
