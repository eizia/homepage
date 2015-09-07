define(['less!./case.less'], function() {
    return {
        caseHomeHandler: function() {
            console.log('case!');
        },
        caseDetailHandler: function(caseName) {
            console.log('case name is:' + caseName);
        }
    }
})
