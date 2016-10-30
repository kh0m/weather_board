class User < ApplicationRecord
  acts_as_authentic do |config|
    config.login_field = :login
    config.crypto_provider = Authlogic::CryptoProviders::Sha512
  end
end
