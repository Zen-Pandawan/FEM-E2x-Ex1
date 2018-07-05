import Route from '@ember/routing/route'; 
import {inject as service} from '@ember/service'; 

export default Route.extend({
    favourites: service(),

    actions:{
        favouriteClicked(org){
            console.log('favourites clicked');
            if (this.get('favourites.items').indexOf(org) < 0){
                this.get('favourites').favouriteItem(org);
            }else{
                this.get('favourites').unfavouriteItem(org);
            }
            
        },
        socialExpansionToggled(){
            console.log("EXPANSION TOGGLED!")
        }

    },

    model(){
        return [
            {'id': '1', 'name': 'Facebook'},
            {'id': '2', 'name': 'Netflix'},
            {'id': '3', 'name': 'Yahoo'},
            {'id': '4', 'name': 'Ember-cli'}
            
            // 'Facebook',
            // 'Netflix',
            // 'Yahoo',
            // 'emberjs'
        ];
    }


});
