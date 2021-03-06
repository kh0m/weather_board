class WeatherPanel extends React.Component {
  constructor(props) {
    super(props);
    // create url for the clickable city name and set it in state
    url = "/cities/show?search=" + this.props.cityName
    this.state = {url: url};
  }

  loadWeatherData(){
    $.ajax({
      url: '/weather',
      dataType: 'json',
      type: 'POST',
      data: {latitude: this.props.latitude, longitude: this.props.longitude, time: this.props.time},
      cache: false,
      success: function(data) {
        // set the state
        this.setState({temperature: Math.floor(data.currently.temperature), icon: data.currently.icon, summary: data.currently.summary, chanceOfRain: (data.currently.precipProbability * 100).toFixed().toString()});
        // set the icon
        var skycons = new Skycons({"color": "pink"});
        skycons.add(this.props.panelID, this.state.icon);
        skycons.play();
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
              <form id="blank-form"></form>
              <a href={this.state.url}><h2>{this.props.cityName}</h2></a>
              <h1>{this.state.temperature}&deg;</h1><canvas id={this.props.panelID} width="128" height="128"></canvas>
              <h3>{this.state.summary}</h3>
              <h4>Chance of Rain: {this.state.chanceOfRain}%</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeatherPanel.propTypes = {
  panelID: React.PropTypes.string,
  cityName: React.PropTypes.string,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
  time: React.PropTypes.number
};
