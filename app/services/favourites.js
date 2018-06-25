import Service from '@ember/service';

export default Service.extend({
    items: [],

    favouriteItem(item){
        this.get('items').addObject(item);
        console.log(this.get('items').map(x => x.id).join(', '));
    }
});
