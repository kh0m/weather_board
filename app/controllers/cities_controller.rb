class CitiesController < ApplicationController
  before_action :require_user

  def index
    @cities = @current_user.cities
  end

  def show
    search_text = params[:search]

    # get longitude and latitude
    response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{search_text}&key=AIzaSyBqUvtKyUKVKHvm5Ro2s7ZaVSIZqHXhHWc")

    # parse json and pass data to the view
    json = JSON.parse(response.body)
    @cityName = json["results"][0]["formatted_address"]
    @latitude = json["results"][0]["geometry"]["location"]["lat"]
    @longitude = json["results"][0]["geometry"]["location"]["lng"]

  end

  def create
    @current_user.cities.create(name: params[:name], latitude: params[:latitude], longitude: params[:longitude])
    redirect_to cities_index_path
  end

  def destroy
    @city = City.find(params[:id])
    @city.destroy

    redirect_to cities_index_path
  end
end
