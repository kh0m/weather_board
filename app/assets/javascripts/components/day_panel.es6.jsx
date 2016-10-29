class DayPanel extends React.Component {
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
        this.setState({temperature: Math.floor(data.currently.temperature), icon: data.currently.icon, summary: data.currently.summary, chanceOfRain: data.currently.precipProbability * 100});
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
            {this.props.day}
          </div>
          <div className="panel-body">
            <h4>{this.state.temperature}&deg;</h4><div>Icon: {this.state.icon}</div>
            <h5>{this.state.summary}</h5>
            <p>Rain: {this.state.chanceOfRain}%</p>
          </div>
        </div>
      </div>
    );
  }
}

  DayPanel.propTypes = {
  cityName: React.PropTypes.string,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
  time: React.PropTypes.number,
  day: React.ProtoTypes.string
};