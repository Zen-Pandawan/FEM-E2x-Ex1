import Route from '@ember/routing/route';

export default Route.extend({
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
