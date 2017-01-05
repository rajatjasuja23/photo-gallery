'use strict';
var PhotoGallerymodule= PhotoGallerymodule || {} 
PhotoGallerymodule.Load= function(){
var Photo = React.createClass({
  displayName: 'Photo',
  render: function render() {
    var album1 = {
      width: '160',
      height: '160'
    };
    var inner = {
      width: '156',
      height: '156'
    };
    var photo1 = {
      width: '150',
      height: '150'
    };
    var anchor = {
      visibility: 'visible',
      verticalAlign: 'inherit'
    };
    var caption_photo1 = {
      height: '150',
      top: '100',
      left: '0',
      width: '150'
    };
    var image = {
      width: '100%'
    };

    return React.createElement(
      'div',
      { className: 'photo_tileview album', style: album1 },
      React.createElement(
        'div',
        { className: 'photo_tileview_inner', style: inner },
        React.createElement(
          'div',
          { className: 'photo_tileview_content box_photo', style: photo1 },
          React.createElement(
            'a',
            { href: 'resources_photogallery_album.html', style: anchor },
            React.createElement('img', { src: this.props.appitem.Img, style: image }),
            React.createElement(
              'div',
              { className: 'photo_tileview_detailsbox caption_photo', style: caption_photo1 },
              React.createElement(
                'ul',
                { className: 'photo_tileview_detailslist' },
                React.createElement(
                  'li',
                  { className: 'photo_tileview_medium photo_tileview_titlesmcollapsed' },
                  React.createElement(
                    'div',
                    { className: 'photo_tileview_titletxtsmcollapsed', expanded: 'photo_tileview_titletxtsmexpanded', collapsed: 'photo_tileview_titletxtsmcollapsed' },
                    this.props.appitem.Title
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'photo_tileview_descmedium' },
                  React.createElement('div', null),
                  React.createElement('div', null)
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'photo_tileview_tabularbox hide' },
          React.createElement(
            'a',
            { className: 'photo_tileview_selectionbox' },
            React.createElement(
              'span',
              { className: 's4-itm-cbox s4-itm-imgcbox' },
              React.createElement(
                'span',
                { className: 's4-itm-imgcbx-inner' },
                React.createElement(
                  'span',
                  { className: 'selectitem-span' },
                  React.createElement('i', { className: 'fa fa-check' })
                )
              )
            )
          ),
          React.createElement('div', { className: 'list-titlelink' }),
          React.createElement(
            'a',
            { className: 'lstitmlinkanchor ellpsis-a-tile' },
            React.createElement('i', { className: 'fa fa-ellipsis-h' })
          )
        )
      )
    );
  }
});

var PhotoGallery = React.createClass({
  displayName: 'PhotoGallery',


  mixins: [ComponentVisibilityMixin],
  getInitialState: function getInitialState() {
    return {
      promodata: [{ "Title": "9th Division/Infantry Team Building on 29 Oct 2016", "Img": "/Style%20Library/mindef/img/folder_img.png" }, { "Title": "2016 DFO Planning Retreat\n", "Img": "/Style%20Library/mindef/img/folder_img.png" }, { "Title": "Family and ACTIVE Day 2016\n", "Img": "/Style%20Library/mindef/img/folder_img.png" }, { "Title": "Merry Christmas 2016\n", "Img": "/Style%20Library/mindef/img/folder_img.png" }, { "Title": "Album 5\n", "Img": "/Style%20Library/mindef/img/folder_img.png" }, { "Title": "Album 6\n", "Img": "/Style%20Library/mindef/img/folder_img.png" }]
    };
  },
  getPromoData: function getPromoData() {
    return [{ "Title": "Universal Studio Singapore Promotion: Winter Season" }, { "Title": "Financial Planning Awareness Talk\n" }];
  },
  retrieveFromWebService: function retrieveFromWebService() {
    console.log('inside component did mount');
    var that = this;
    var url = "/SiteAssets/Photo%20Gallery/photo-galleryjson.js";
    fetch(url).then(function (response) {
      if (response.status >= 400) {
        throw new Error("no server");
      }
      return response.json();
    }).then(function (data) {
      that.setState({ promodata: data });
    });
  },


  componentVisibilityChanged: function componentVisibilityChanged() {
    this.retrieveFromWebService();
    this.disableVisibilityHandling();
  },

  renderPromotions: function renderPromotions() {
    return this.state.promodata.map(function (promoitem, index) {
      return React.createElement(Photo, { appitem: promoitem, key: index });
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'col-md-9 maincontent_box fluid_content' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'h1',
            { className: 'maincontent_heading' },
            React.createElement(
              'div',
              { className: 'box_title_heading' },
              'Photo Gallery'
            ),
            React.createElement(
              'div',
              { className: 'box_allview_wrapper' },
              '\xA0'
            )
          ),
          React.createElement(
            'div',
            { className: 'main_content' },
            React.createElement(
              'h2',
              null,
              'Latest Albums'
            ),
            React.createElement(
              'div',
              { className: 'table-responsive photo_gallery' },
              React.createElement(
                'table',
                { className: 'table' },
                React.createElement(
                  'tbody',
                  null,
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      React.createElement(
                        'div',
                        null,
                        this.renderPromotions()
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(PhotoGallery, null), document.getElementById('PhotoGallery'));
}