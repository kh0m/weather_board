class User < ApplicationRecord
  has_many :cities, dependent: :destroy

  acts_as_authentic do |config|
    config.login_field = :login
    config.crypto_provider = Authlogic::CryptoProviders::Sha512
  end
end
