module V1
	class V1::SessionSerializer < ActiveModel::Serializer
	 	attributes :email, :token_type, :user_id, :access_token

	    def user_id
	      object.id
	    end

	    def token_type
	      'QuangDai'
	    end
	end
end