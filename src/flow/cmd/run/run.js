
var  cmd = require('../../util/process')
   , path = require('path')
   , native = require('./run.native')
   , web = require('./run.web')

// > flow run target -options

exports.run = function run(flow, data) {

    if(!flow.project.parsed) {
        return;
    }

    if(flow.project.failed) {
        return;
    }

    console.log('flow / running %s %s for %s\n',
        flow.project.parsed.name, flow.project.parsed.version, flow.target);

    if(flow.target_native) {
        native.run(flow);
    } else if(flow.target_web) {
        web.run(flow);
    }

} //run

exports.verify = function verify(flow, done) {

    if(flow.target) {
        done(null,null);
    } else {
        done(true,null);
    }

} //verify

exports.error = function(flow, err) {

    if(err && err.length > 0) {
        console.log('flow / run / error %s', err);
    }

} //error