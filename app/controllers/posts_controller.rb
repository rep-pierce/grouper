class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
        posts = Post.all
        render json: posts, status: :ok
    end
 
    def create
        current_user
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = find_post
        post.destroy
        head :no_content
    end


    def update
        post = find_post
        post.update!(post_params)
        render json: post, status: :accepted
    end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :image, :content, :user_id, :group_id )
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Post not found" }, status: :not_found 
    end
end


def update
    scientist = find_scientist
    scientist.update!(scientist_params)
    render json: scientist, status: :accepted
end