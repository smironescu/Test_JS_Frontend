describe("#render", function() {
  it("creates an svg", function() {
    var d3Spy = jasmine.createSpyObj('d3', ['append']),
        svgSpy = jasmine.createSpyObj('svg', ['attr', 'append']),
        gSpy = jasmine.createSpyObj('g', ['attr', 'append']),
        defsSpy = jasmine.createSpyObj('defs', ['append']);

    spyOn(d3, 'select').and.returnValue(d3Spy);
    d3spy.append.and.returnValue(svgSpy);
    svgSpy.attr.and.returnValue(svgSpy);
    svgSpy.append.and.returnValue(gSpy);
    gSpy.attr.and.returnValue(gSpy);
    gSpy.append.and.returnValue(defsSpy);
    defsSpy.append.and.returnValue(

        initializeGraph());
    graph.render();

    expect(d3Spy.append).toHaveBeenCalledWith('svg');
  });
});
