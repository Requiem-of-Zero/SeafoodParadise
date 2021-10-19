class UsersController < ApplicationController :
  def create
    @user = User.new
  end

  def new

  end

  def user_params
    
  end
end