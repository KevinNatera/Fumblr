class Api::FollowsController < ApplicationController

    def index 
        @follows = Follow.all
        render :index
    end


    def create 
        @follow = Follow.new(follow_params)
    
        if @follow.save 
            render json: @follow
        else
            render json: @follow.errors.full_messages, status: 422
        end 
    end



    def destroy 
        @follow = Follow.find(params[:id])

        if @follow.destroy 
        else 
            render json: @follow.errors.full_messages, status: 422
        end
    end

    private 
    def follow_params 
        params.require(:follow).permit(:follower_id,:followee_id)
    end
end
