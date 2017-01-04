describe("Inhoud van de json file", function(){

        var datalists = ["owner","title","description","price","place","code"];

        it("datalist should contain items'", function(){
            expect(datalists).not.toBe(null);;
        });
        it("should contain an 'owner'", function(){
            expect(datalists).toContain("owner");
        });
        it("should contain a 'title'", function(){
            expect(datalists).toContain("title");
        });
        it("should contain a 'description'", function(){
            expect(datalists).toContain("description");
        });
        it("should contain a 'price'", function(){
            expect(datalists).toContain("price");
        });
        it("should contain a 'place'", function(){
            expect(datalists).toContain("place");
        });
        it("should contain a 'code'", function(){
            expect(datalists).toContain("code");
        });
    });
