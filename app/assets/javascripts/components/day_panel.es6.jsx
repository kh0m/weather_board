class DayPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ""};
  }

  loadWeatherData() {
    $.ajax({
      url: '/weather',
      dataType: 'json',
      type: 'POST',
      data: {latitude: this.props.latitude, longitude: this.props.longitude, time: this.props.time},
      cache: false,
      success: function(data) {
        var temperature = (!(data.currently.temperature) ? "Not Available" : data.currently.temperature );
        var icon = (!(data.currently.icon) ? "Not Available" : data.currently.icon );
        var summary = (!(data.currently.summary) ? "Not Available" : data.currently.summary);
        var chanceOfRain = (!(data.currently.precipProbability) ? "Not Available" : (data.currently.precipProbability * 100).toString() + "%");

        this.setState({temperature: Math.floor(temperature), icon: icon, summary: summary, chanceOfRain: chanceOfRain});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  setDay() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    var date = new Date(this.props.time*1000);
    var day = date.getDay();
    this.setState({day: days[day]});
    var date_num = date.getDate();
    this.setState({date_num: date_num})
  }

  componentDidMount() {
    this.loadWeatherData();
    this.setDay();
  }

  render () {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            {this.state.day}, {this.state.date_num}
          </div>
          <div className="panel-body">
            <h4>{this.state.temperature}&deg;</h4><div>Icon: {this.state.icon}</div>
            <h5>{this.state.summary}</h5>
            <p>Rain: {this.state.chanceOfRain}</p>
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
  time: React.PropTypes.number
};
