class Api::PokemonController < Api::ApplicationController
    def pokemones
        render json: [{name:"uno"}, {name:"dos"}]
    end

    def otro(a,b)
        a+b
    end
end
