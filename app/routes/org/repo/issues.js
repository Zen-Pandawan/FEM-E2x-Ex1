import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
    model(){
        let orgId = get(this.modelFor('org'),'login');
        let repoId = get(this.modelFor('org.repo'), 'name');
        // debugger;
        return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues`)
                    .then(rawIssues => {
                        // debugger;
                        return rawIssues.map(rawIssues => {
                            rawIssues.oldId = rawIssues.id;
                            rawIssues.id = rawIssues.login;
                            return rawIssues;
                        });
                    });
    }
});
