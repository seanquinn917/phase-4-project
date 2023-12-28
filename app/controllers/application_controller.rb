class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized


 
  def authorized
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include?(:user_id)

    @current_user = User.find_by(id: session[:user_id])

    return render json: { error: "Not Authorized" }, status: :unauthorized unless @current_user
  end
  
  def current_user
    @current_user
  end

end
