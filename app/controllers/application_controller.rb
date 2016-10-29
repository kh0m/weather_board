class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def weather
    response = HTTParty.get("https://api.darksky.net/forecast/d983f78497d9348f6cdf9a6084b47250/#{params[:latitude]},#{params[:longitude]},#{params[:time]}")

    render json: response.body
  end
end
