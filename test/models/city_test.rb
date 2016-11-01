require 'test_helper'

class CityTest < ActiveSupport::TestCase
  test "invalid without name" do
    city = City.new
    assert_not city.save, "tried to save without name"
  end
  test "invalid without latitude" do
    city = City.new
    assert_not city.save, "tried to save without latitude"
  end
  test "invalid without longitude" do
    city = City.new
    assert_not city.save, "tried to save without longitude"
  end
end
