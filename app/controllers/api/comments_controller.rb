class Api::CommentsController < ApplicationController
    
        def new 
            @comment = Comment.new
            render :new 
        end
        
        def index 
            @comments = Comment.all 
            render :index 
        end
    
        def show
            @comment = Comment.find(params[:id])
            if @comment
              render :show
            else
              render json: @comment.errors.full_messages, status: 404
            end
          end
    
        def create 
            @comment = Comment.new(comment_params)
        
            if @comment.save 
                render json: @comment
            else
                render json: @comment.errors.full_messages, status: 422
            end 
        end
    
        def destroy 
            @comment = Comment.find(params[:id])
    
            if @comment.destroy 
            else 
                render json: @comment.errors.full_messages, status: 422
            end
        end
    
        private 
        
        def comment_params 
            params.require(:comment).permit(:commenter_id,:post_id, :body)
        end
    
end
