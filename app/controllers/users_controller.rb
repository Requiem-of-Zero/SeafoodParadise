class UsersController < ApplicationController :
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
  end

  def new

  end

  def user_params

  end
end