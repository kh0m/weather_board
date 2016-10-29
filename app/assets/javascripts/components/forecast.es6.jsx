class Forecast extends React.Component {
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
              <h1>{Math.floor(this.state.temperature)}&deg;</h1><div>Icon: {this.state.icon}</div>
              <h3>{this.state.summary}</h3>
              <h4>Chance of Rain: {this.state.chanceOfRain}%</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  temperature: React.PropTypes.number,
  icon: React.PropTypes.string,
  summary: React.PropTypes.string,
  precipProb: React.PropTypes.number
};
