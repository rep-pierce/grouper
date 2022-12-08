class GroupsController < ApplicationController

    def index
        groups = Group.all
        render json: groups, status: :ok
    end

end
