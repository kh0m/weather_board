require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "invalid if empty" do
    user = User.new
    assert_not user.save
  end

end
