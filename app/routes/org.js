/* global $ */
import Route from '@ember/routing/route';

export default Route.extend({
    model(params){        
        //debugger; //?access_token=78f552c8f45f1bd22718d55d74dcc980e3a852d9
        return $.get(`https://api.github.com/orgs/${params.id}`).then(rawOrg => {
            //backup github numeric ID
            rawOrg.oldId = rawOrg.id;
            //use repo name as our app's ID for the model.
            rawOrg.id = rawOrg.name;
            //debugger;
            return rawOrg;
        });
    }
});
