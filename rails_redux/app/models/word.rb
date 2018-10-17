class Word
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Attributes::Dynamic
  field :word, type: String
  field :times, type: Integer
  belongs_to :history
  # embeds_one :history
end
