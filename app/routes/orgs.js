import Route from '@ember/routing/route'; 
import {inject as service} from '@ember/service'; 

export default Route.extend({
    favourites: service(),

    actions:{
        favouriteClicked(org){
            this.get('favourites').favouriteItem(org);
        }
    },

    model(){
        return [
            {'id': '1', 'name': 'Facebook'},
            {'id': '2', 'name': 'Netflix'},
            {'id': '3', 'name': 'Yahoo'},
            {'id': '4', 'name': 'Emberjs'}
            
            // 'Facebook',
            // 'Netflix',
            // 'Yahoo',
            // 'emberjs'
        ];
    }


});
