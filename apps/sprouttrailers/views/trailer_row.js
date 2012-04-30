Sprouttrailers.TrailerRow = SC.ScrollView.extend({
  layout:{left: 0, right: 0, height: 250, top: 0},
  hasHorizontalScroller: YES,
  hasVerticalScroller: NO,
  contentRow: '',

  contentView:SC.CollectionView.extend(SC.FlowedLayout, {
    defaultFlowSpacing: {left:0, right:0 },
    flowPadding: { left: 0, bottom: 0, right: 0, top: 0 },
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    canWrap: NO,
    contentBinding:'.parentView.parentView.contentRow',

    exampleView:SC.View.extend({
      classNames: ['trailer-container'],
      layout:{height: 250,  width:185},
      render:function(context) {
        var content = this.getPath('content');
        if (!content) return
        var img = content.get('poster');
        context.push("<img class='core-row-image' src='%@' alt='image' />".fmt(img));
      },
      mouseDown: function() {
        Sprouttrailers.statechart.sendEvent('doShowQuickPreview', this.getPath('content.location'),2);
      }
    })
  })
});