import Service from '@ember/service';

export default Service.extend({
    items: [],

    log(){
        console.log(
            this.get('items')
            .map(x => x.id)
            .join(', ')
        );
    },

    favouriteItem(item){
        this.get('items').addObject(item);
        this.log();
    },

    unfavouriteItem(item){
        this.get('items').removeObject(item);
        this.log();
    }
});
