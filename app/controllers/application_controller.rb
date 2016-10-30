class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # get weather data from any view
  def weather
    response = HTTParty.get("https://api.darksky.net/forecast/d983f78497d9348f6cdf9a6084b47250/#{params[:latitude]},#{params[:longitude]},#{params[:time]}")

    render json: response.body
  end

  helper_method :current_user, :current_user_session

  def current_user
    @current_user ||= current_user_session && current_user_session.user
  end

  def current_user_session
    @current_user_session ||= UserSession.find
  end

  def require_user
    redirect_to '/login' unless current_user
  end
end
