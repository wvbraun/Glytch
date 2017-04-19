import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlytchHeader from "./GlytchHeader";
import GlytchContainer from "./GlytchContainer";
import * as glytchActions  from "../../actions/glytchActions";

class GlytchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.selectImage = this.selectImage.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  selectImage(e) {
    event.preventDefault();
    const image = {
      alt: e.target.alt,
      src: e.target.src
    };
    this.props.actions.selectImage(image);
  }

  addImage(images) {
    if (images.length < 1) {
      return;
    }
    let img = images[0]
    this.props.actions.addImage(img);
  }

  render() {
    const { images, currentImage } = this.props;
    return (
      <div>
        <GlytchHeader
          onDrop={this.addImage}
        />
        <GlytchContainer
          images={images}
          currentImage={currentImage}
          onSelectImage={this.selectImage}
        />
      </div>
    );
  }
}

GlytchPage.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  currentImage: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { glytch } = state;
  return {
    images: glytch.images,
    currentImage: glytch.currentImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(glytchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlytchPage);
