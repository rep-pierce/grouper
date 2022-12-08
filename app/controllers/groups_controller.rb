class GroupsController < ApplicationController

    def index
        groups = Group.all
        render json: groups, status: :ok
    end

    def show
        group = find_group
        render json: group, status: :ok
    end

    private

    def group_params
        params.permit(:name, :description, :user)
    end

    def find_group
        group = Group.find(params[:id])
    end

end
