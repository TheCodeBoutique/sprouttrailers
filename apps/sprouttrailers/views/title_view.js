Sprouttrailers.TitleView = SC.View.extend({
  classNames: ['title-view'],
  layout: {width: 100},
  childViews: ['justAddedTitle','mostPopularTitle','exclusiveTitle'],

  justAddedTitle: SC.LabelView.design({
    classNames: ['base-font'],
    layout: { height: 270, top: 80},
    controlSize: SC.LARGE_CONTROL_SIZE,
    fontWeight: SC.BOLD_WEIGHT,
    textAlign: SC.ALIGN_CENTER,
    escapeHTML: NO,
    isTextSelectable: YES,
    value:'Just Added'
  }),
  mostPopularTitle: SC.LabelView.design({
    classNames: ['base-font'],
    layout: { height: 250, top: 350},
    controlSize: SC.LARGE_CONTROL_SIZE,
    fontWeight: SC.BOLD_WEIGHT,
    textAlign: SC.ALIGN_CENTER,
    escapeHTML: NO,
    isTextSelectable: YES,
    value:'Most Popular'
  }),
  exclusiveTitle: SC.LabelView.design({
    classNames: ['base-font'],
    layout: { height: 250, top: 620},
    controlSize: SC.LARGE_CONTROL_SIZE,
    fontWeight: SC.BOLD_WEIGHT,
    textAlign: SC.ALIGN_CENTER,
    escapeHTML: NO,
    isTextSelectable: YES,
    value:'Exclusive'
  })

});
