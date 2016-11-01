class City < ApplicationRecord
  validates :name, :latitude, :longitude, presence: :true
end
