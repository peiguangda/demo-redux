module V1
  class AuthenticationsController < ApplicationController
    before_action :authenticate_user_from_token!, only: [:create]

    # POST /v1/login
    def create
      return unless current_user
      render json: {email: current_user.email, access_token: current_user.access_token}
    end
  end
end
