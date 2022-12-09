class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def user_params
        params.permit(:first_name, :last_name, :username, :age, :password, :password_confirmation)
    end

end
