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
        var poster = ['<div class="core-row-image" style="background-image:url('+img+')">','</div>'].join('');
        var previewIcon = ['<div class="preview-button">','</div>'].join('');
        var infoIcon = ['<div class="info-button">','</div>'].join('');

        context.push(poster,previewIcon,infoIcon);
      },
      mouseDown: function(evt) {
        if (SC.$(evt.target).hasClass('info-button')) {
          var selectionset = SC.SelectionSet.create();
          var item = this.content;
          selectionset.addObject(item);
          Sprouttrailers.justAddedController.selectObject(item);
          Sprouttrailers.statechart.sendEvent('doEnterTrailerOverview',this.get('content'));
        } else {
          Sprouttrailers.statechart.sendEvent('doShowQuickPreview', this.getPath('content.location'), 2);
        }
      }
    })
  })
});