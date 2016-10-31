class FavoritePanel extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    $.post("/cities/destroy", {id: this.props.id});
  }

  render () {
    return (
      <div>
        <div className="pull-right btn btn-default" onClick={this.destroy}>
          <span className="glyphicon glyphicon-remove"></span>
        </div>
        <WeatherPanel cityName={this.props.cityName} latitude={this.props.latitude} longitude={this.props.longitude} time={this.props.time} />
      </div>
    );
  }
}

FavoritePanel.propTypes = {
  id: React.PropTypes.number,
  cityName: React.PropTypes.string,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
  time: React.PropTypes.number
};
