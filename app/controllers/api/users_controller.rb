class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
      end
    
      def create
        @user = User.new(user_params)
        @user.avatar.attach(io: File.open("app/assets/images/default_batman.png"), filename: "default_batman.png")
        if @user.save
          login(@user)
          # redirect_to user_url(@user)
          render :show
        else
          # render :new
          render json: @user.errors.full_messages, status: 422
        end
      end
    
      def show
        @user = User.find(params[:id])
        if @user
          render :show
        else
          render json: @user.errors.full_messages, status: 404
        end
      end
    
      def index
        @users = User.all
        render :index
      end
    
      # def edit
      #   @user = User.find(params[:id])
      # end

      def update
        @user = User.find(params[:id])

        puts("YOOOOOOOOOOOOOOOO")
        puts(params[:avatar])
  
        puts(params)
        
        @user.avatar.attach(params[:avatar])
        
        if @user.avatar.attached? 
          puts(@user)
          render json: @user
         else 
           render json: ["Error: profile didn't attach"], status: 422
        end
      end
    
      # def update
      #   @user = User.find(params[:id])
      #   if @user.update(user_params)
      #     redirect_to user_url(@user)
      #   else
      #     render json: @user.errors.full_messages, status: 422
      #   end
      # end
    
      # def destroy
      #   @user = User.find(params[:id])
      #   if @user.destroy
      #     redirect_to users_url
      #   else
      #     render plain: "You can't destroy what's not there."
      #   end
      # end
    
    #   def search
    #     @users = User.where("username LIKE '%#{params[:query]}%'")
    #     render json: @users
    #   end
    
      private
    
      def user_params
        params.require(:user).permit(:username, :email, :password, :avatar)
      end
end
