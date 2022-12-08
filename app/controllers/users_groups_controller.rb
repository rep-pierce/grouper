class UsersGroupsController < ApplicationController

    def index
        users_groups = UsersGroup.all
        render json: users_groups, status: :ok
    end
    
end
