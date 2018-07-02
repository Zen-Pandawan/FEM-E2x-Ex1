/* global $ */
import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
    model(){
        let orgId = get(this.modelFor('org'),'login');
        let repoId = get(this.modelFor('org.repo'), 'name');
        // debugger;
        return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors`)
                    .then(rawContributors => {
                        // debugger;
                        return rawContributors.map(rawContributor => {
                            rawContributor.oldId = rawContributor.id;
                            rawContributor.id = rawContributor.login;
                            return rawContributor;
                        });
                    });
    }
});
