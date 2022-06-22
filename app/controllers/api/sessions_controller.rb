class Api::SessionsController < ApplicationController
    # before_action :require_logged_in, only: [:destroy]

    def new
        render :new
      end
    
      def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
          render json: ['Invalid username or password.'],  status: 422
        else
          login(@user)
          # redirect_to user_url(@user)
          render "api/users/show"
        end
    
      end
    
      def destroy
        logout!
        # redirect_to new_session_url
        render json: {} 
      end
end
