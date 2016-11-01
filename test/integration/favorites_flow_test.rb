require 'test_helper'

class FavoritesFlowTest < ActionDispatch::IntegrationTest
  test "can create favorite" do
    city = City.create(name: 'mycity', latitude: 0.0, longitude: 5.5)
    assert_not_nil city
  end

  test "should show login page if not authenticated" do
    post cities_create_path, params: { name: 'mycity', latitude: 0.0, longitude: 5.5 }
    assert_redirected_to login_path
  end
end
