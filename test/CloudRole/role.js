describe("CloudRole", function () {

    it("Should create a role", function (done) {

        this.timeout(10000);
        var role = new CB.CloudRole('nodejs');
        role.name='nodejs';
        console.log(role.ACL);
        role.save().then(function(list){
            console.log(list);
            if(!list)
                throw "Should retrieve the cloud role";
            done();
        },function(){
            throw "Should retrieve the cloud role";
        });
    });

    it("Should Retrieve a role", function (done) {
		
        this.timeout(10000);
        var role = new CB.CloudRole('nodejs');
        CB.CloudRole.getRole(role).then(function(list){
        	console.log(list);
        	if(!list)
        		throw "Should retrieve the cloud role";
            done();
        },function(){
            throw "Should retrieve the cloud role";
        });
    });
    
    it("Should not Retrieve a role", function (done) {
		
        this.timeout(10000);
        var role = new CB.CloudRole('abcd');
        CB.CloudRole.getRole(role).then(function(list){
        	console.log(list);
        	if(list)
        		throw "Should retrieve null";
            done();
        },function(){
            throw "Should retrieve the cloud role";
        });
    });
});
