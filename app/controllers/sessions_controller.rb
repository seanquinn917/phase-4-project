class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        # puts "this", user.inspect # Add this line to check the value of user
        # puts User.where(username: params[:username]).to_sql
        session[:user_id] = user.id
        render json: user
end 




end
