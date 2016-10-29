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
      data: {latitude: this.props.latitude, longitude: this.props.longitude, time: this.props.time},
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
          <div className="panel-heading">
            <h1>{this.props.cityName}</h1>
          </div>

          <div className="panel-body">
            <h2>Current Weather</h2>
            <div className="row">
              <div className="col-sm-4 text-center">
                <WeatherPanel latitude={this.props.latitude} longitude={this.props.longitude} time={this.props.time}/>
              </div>
            </div>
            <h2>10-day Forecast</h2>
            <div className="row">
              <div className="col-lg-2 text-center">
                <WeatherPanel latitude={this.props.latitude} longitude={this.props.longitude} time={this.props.time}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  cityName: React.PropTypes.string,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
  time: React.PropTypes.number
};
