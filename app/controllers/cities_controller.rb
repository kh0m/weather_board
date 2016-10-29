class CitiesController < ApplicationController
  def index
  end

  def show
    search_text = params[:search]
    p search_text

    # first hit the google places api to get an exact place for ambiguous queries

    # get longitude and latitude

    # get weather data for longitude and latitude

    # render json to the view
  end
end
