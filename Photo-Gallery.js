"use strict";

var Photo = React.createClass({
  displayName: "Photo",
  render: function render() {
    return React.createElement(
      "div",
      { className: "photo_tileview album1" },
      React.createElement(
        "div",
        { className: "photo_tileview_inner" },
        React.createElement(
          "div",
          { className: "photo_tileview_content box_photo1" },
          React.createElement(
            "a",
            { href: "resources_photogallery_album.html" },
            React.createElement("img", { src: this.props.appitem.Img, border: "0" }),
            React.createElement(
              "div",
              { className: "photo_tileview_detailsbox caption_photo1" },
              React.createElement(
                "ul",
                { className: "photo_tileview_detailslist" },
                React.createElement(
                  "li",
                  { className: "photo_tileview_medium photo_tileview_titlesmcollapsed" },
                  React.createElement(
                    "div",
                    { className: "photo_tileview_titletxtsmcollapsed" },
                    this.props.appitem.Title
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "photo_tileview_tabularbox hide" },
          React.createElement(
            "a",
            { className: "photo_tileview_selectionbox" },
            React.createElement(
              "span",
              { className: "s4-itm-cbox s4-itm-imgcbox" },
              React.createElement(
                "span",
                { className: "s4-itm-imgcbx-inner" },
                React.createElement(
                  "span",
                  { className: "selectitem-span" },
                  React.createElement("i", { className: "fa fa-check" })
                )
              )
            )
          ),
          React.createElement("div", { className: "list-titlelink" }),
          React.createElement(
            "a",
            { className: "lstitmlinkanchor ellpsis-a-tile" },
            React.createElement("i", { className: "fa fa-ellipsis-h" })
          )
        )
      )
    );
  }
});

var PhotoGallery = React.createClass({
  displayName: "PhotoGallery",


  mixins: [ComponentVisibilityMixin],
  getInitialState: function getInitialState() {
    return {
      promodata: [{ "Title": "9th Division/Infantry Team Building on 29 Oct 2016", "Img": "./folder_img.png" }, { "Title": "2016 DFO Planning Retreat\n", "Img": "./folder_img.png" }, { "Title": "Family and ACTIVE Day 2016\n", "Img": "./folder_img.png" }, { "Title": "Merry Christmas 2016\n", "Img": "./folder_img.png" }, { "Title": "Album 5\n", "Img": "./folder_img.png" }, { "Title": "Album 6\n", "Img": "./folder_img.png" }]
    };
  },
  getPromoData: function getPromoData() {
    return [{ "Title": "Universal Studio Singapore Promotion: Winter Season", "PromoPeriod": "01 Dec 2016 to 02 Jan 2017", "Postedby": "MSS-PSC", "Date": "30-Dec-16" }, { "Title": "Financial Planning Awareness Talk\n", "PromoPeriod": "25 Oct 2016 to 04 Nov 2016", "Postedby": "MSS-PSC", "Date": "12/30/2016" }];
  },
  retrieveFromWebService: function retrieveFromWebService() {
    console.log('inside component did mount');
    var that = this;
    var url = "photo-gallery.json";
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
      "div",
      null,
      this.renderPromotions()
    );
  }
});

ReactDOM.render(React.createElement(PhotoGallery, null), document.getElementById('PhotoGallery'));