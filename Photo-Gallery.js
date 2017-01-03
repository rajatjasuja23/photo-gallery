'use strict';

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
      { className: 'photo_tileview album1', style: album1 },
      React.createElement(
        'div',
        { className: 'photo_tileview_inner', style: inner },
        React.createElement(
          'div',
          { className: 'photo_tileview_content box_photo1', style: photo1 },
          React.createElement(
            'a',
            { href: '\'/Photo%20Gallery/Forms/ReactPhotogallery.aspx?RootFolder=%2FPhoto%20Gallery%2F\' + \'{this.props.appitem.Title}\' + \'&FolderCTID=0x0120003C30C36929368B4EAD3FB4BE033BE7F6&View=%7B55E9424E-3877-47CB-95F0-2AFE14B15FE7%7D\' ', onclick: 'SP.UI.TileView.Utilities.itemLinkNavigate(\'8,1,1\',\'Tile_WPQ2_1_9\');', style: anchor },
            React.createElement('img', { src: this.props.appitem.Img, border: '0', style: image }),
            React.createElement(
              'div',
              { className: 'photo_tileview_detailsbox caption_photo1', style: caption_photo1 },
              React.createElement(
                'ul',
                { className: 'photo_tileview_detailslist' },
                React.createElement(
                  'li',
                  { className: 'photo_tileview_medium photo_tileview_titlesmcollapsed' },
                  React.createElement(
                    'div',
                    { className: 'photo_tileview_titletxtsmcollapsed' },
                    this.props.appitem.Title
                  )
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
    var url = "photo-gallery.js";
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
    return this.state.promodata.map(function (promoitem) {
      return React.createElement(Photo, { appitem: promoitem });
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      this.renderPromotions()
    );
  }
});

ReactDOM.render(React.createElement(PhotoGallery, null), document.getElementById('PhotoGallery'));