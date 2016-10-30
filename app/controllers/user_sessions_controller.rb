class UserSessionsController < ApplicationController

  def new
    @user_session = UserSession.new
  end

  def create
    @user_session = UserSession.new(user_session_params)
    if @user_session.save
      redirect_to home_index_path(@current_user)
    else
      render :new
    end
  end

  def destroy
    current_user_session.destroy
    redirect_to home_index_path
  end

  def user_session_params
    params.require(:user_session).permit(:login, :password)
  end

end
