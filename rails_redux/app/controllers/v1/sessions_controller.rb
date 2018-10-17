module V1
  class SessionsController < ApplicationController
    skip_before_action :authenticate_user_from_token!, only: [:create]

    # POST /v1/login
    def create
      @user = User.find_for_database_authentication(email: params[:email])
      return invalid_email unless @user

      if @user.valid_password?(params[:password])
        sign_in :user, @user
        render json: @user, serializer: SessionSerializer, root: nil
      else
        invalid_password
      end
    end

    # def destroy
    #   return render json: { fails: 'logout fails' } unless current_user
    #   sign_out :user, current_user
    #   render json: { success: 'logout success' }
    # end

    private

    def invalid_email
      warden.custom_failure!
      render json: { error: 'invalid_email' }
    end

    def invalid_password
      warden.custom_failure!
      render json: { error: 'invalid_password' }
    end
  end
end