
class Api::PokemonControllerTest < ActionController::TestCase 
    test "probando" do
        get :pokemones
        val = JSON.parse(response.body)
        assert_equal val, [{"name"=>"uno"}, {"name"=>"dos"}]
    end

    test "otra" do
        controller = Api::PokemonController.new
        val = controller.otro(1,2)
        assert_equal val, 3  
    end
end
