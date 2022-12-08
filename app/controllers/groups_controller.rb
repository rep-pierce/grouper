class GroupsController < ApplicationController

    def index
        groups = Group.all
        render json: groups, status: :ok
    end

    def show
        group = Group.find_by(id: params[:id])
        render json: group, include: :posts, status: :ok
    end

end
