class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def weather
    unix_time = DateTime.rfc3339(params[:time]).to_time.to_i

    response = HTTParty.get("https://api.darksky.net/forecast/d983f78497d9348f6cdf9a6084b47250/#{params[:latitude]},#{params[:longitude]},#{unix_time}")

    render json: response.body
  end
end
