import Component from '@ember/component';
import isInArray from 'ex1-git-hub-ui/utils/is-in-array';
import { inject as injectService } from '@ember/service';

export default Component.extend({
    favourites: injectService(),
    // isInArray(arg1 = property name of what is being favourited, arg2=property name of the list;
    isFavourited: isInArray('gh-org', 'favourites.items'), 
    
    actions: {
        buttonClick(){
            console.log('clicked star');
            this.sendAction('gh-action', this.get('gh-org'));
        }
    },

    tagName: 'li',
    classNames: ['gh-repo-component']
});
