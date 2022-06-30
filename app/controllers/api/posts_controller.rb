class Api::PostsController < ApplicationController

    def new 
        @post = Post.new
        render :new 
    end
    
    def index 
        @posts = Post.all 
        render :index 
    end

    def show
        @post = Post.find(params[:id])
        if @post
          render :show
        else
          render json: @post.errors.full_messages, status: 404
        end
      end

    def create 
        @post = Post.new(post_params)
    
        if @post.save 
            render json: @post
        else
            render json: @post.errors.full_messages, status: 422
        end 
    end

    # def edit
    #     @post = current_user.posts.find_by(id: params[:id])
    #     render :edit
    # end

    def update 
        @post = Post.find(params[:id])

        if @post.author_id == current_user.id 

            if @post.update(post_params) 
                render json: @post
            else  
                render json: @post.errors.full_messages, status: 422
            end
            
        else  
            render json: ["Something went wrong!"], status: 422
        end

    end 

    def destroy 
        @post = Post.find(params[:id])

        if @post.destroy 
        else 
            render json: @post.errors.full_messages, status: 422
        end
    end

    private 
    def post_params 
        params.require(:post).permit(:title,:body,:url,:author_id)
    end
end
