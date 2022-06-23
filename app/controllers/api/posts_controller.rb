class Api::PostsController < ApplicationController
    # before_action :require_logged_in, only: [:index, :new, :create, :edit, :update]

    def new 
        @post = Post.new
        render :new 
    end
    
    def index 
        @posts = Post.all 
        render :index 
    end

    def create 
        @post = Post.new(post_params)
        @post.author_id = params[:author_id]
        
        if @post.save 
            # redirect_to posts_url
            render json: {}
        else
            render json: @post.errors.full_messages, status: 422
        end 
    end

    # def edit
    #     @post = current_user.posts.find_by(id: params[:id])
    #     render :edit
    # end

    # def update 
    #     @post = Post.find(params[:id])

    #     if @post.author_id == current_user.id 

    #         if @post.update(post_params) 
    #             redirect_to posts_url 
    #         else  
    #             flash[:errors] = ["Something went wrong!"]
    #         end

    #     else  
    #         flash[:errors] = ["Something went wrong!"]
    #     end

    # end 

    def destroy 
        @Post = Post.find(params[:id])

        if @Post.destroy 
        else 
            render json: @post.errors.full_messages, status: 422
        end
    end

    private 
    def post_params 
        params.require(:post).permit(:title,:body,:url)
    end
end
