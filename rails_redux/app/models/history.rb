class History
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Attributes::Dynamic
  field :user_id, type: Integer
  has_many :words, dependent: :destroy
  # embeds_many :words

  class << self
  	def find_or_initialize_by user_id, word
  		collections[:historys].find( 
  			likes: { user_id: user_id }, word: word).first
  	end
  end

end
