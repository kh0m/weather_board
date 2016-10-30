class FavoritePanel extends React.Component {
  render () {
    return (
      <div>
        <div className="pull-right btn btn-default">
          <span className="glyphicon glyphicon-remove"></span>
        </div>
        <WeatherPanel cityName={this.props.cityName} latitude={this.props.latitude} longitude={this.props.longitude} time={this.props.time} />
      </div>
    );
  }
}

FavoritePanel.propTypes = {
  cityName: React.PropTypes.string,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
  time: React.PropTypes.number
};
