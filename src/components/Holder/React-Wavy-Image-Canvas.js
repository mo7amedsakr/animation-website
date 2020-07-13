import React from 'react';

export default class WavyImage extends React.Component {
  constructor(props) {
    super(props);
    this.waves = this.waves.bind(this);
    this.loop = this.loop.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      isHover: false,
      count: 0,
    };
    this.canvas = React.createRef();
  }

  componentDidMount() {
    var img = new Image();
    img.src = this.props.source;
  }

  waves(playCount) {
    var img = new Image();
    img.src = this.props.source;
    var canvas = this.canvas.current,
      ctx = canvas.getContext('2d'),
      w = canvas.width,
      h = canvas.height;

    function Osc(speed) {
      var frame = 0;

      this.current = function (x) {
        frame += 0.005 * speed;
        return Math.sin(frame + x * speed);
      };
    }

    console.log(ctx);
    var o1 = new Osc(0.05),
      o2 = new Osc(0.03),
      o3 = new Osc(0.06),
      x0 = 0,
      x1 = w * 0.25,
      x2 = w * 0.5,
      x3 = w * 0.75,
      x4 = w;

    this.loop(w, h, o1, o2, o3, x0, x1, x2, x3, x4, ctx, img, playCount);
  }

  loop(w, h, o1, o2, o3, x0, x1, x2, x3, x4, ctx, img, playCount) {
    if (this.state.isHover) {
      ctx.clearRect(0, 0, w, h);
      for (var y = 0; y < h; y++) {
        // segment positions
        var lx1 = x1 + o1.current(y * 0.2) * 3; // scaled to enhance demo effect
        var lx2 = x2 + o2.current(y * 0.2) * 3;
        var lx3 = x3 + o3.current(y * 0.2) * 3;

        // segment widths
        var w0 = lx1;
        var w1 = lx2 - lx1;
        var w2 = lx3 - lx2;
        var w3 = x4 - lx3;

        // draw image lines ---- source ----   --- destination ---
        ctx.drawImage(img, x0, y, x1, 1, 0, y, w0, 1);
        ctx.drawImage(img, x1, y, x2 - x1, 1, lx1 - 0.5, y, w1, 1);
        ctx.drawImage(img, x2, y, x3 - x2, 1, lx2 - 1, y, w2, 1);
        ctx.drawImage(img, x3, y, x4 - x3, 1, lx3 - 1.5, y, w3, 1);
      }
    } else if (this.state.count === 0) {
      ctx.clearRect(0, 0, w, h);
      for (var y = 0; y < h; y++) {
        // segment positions
        var lx1 = x1 + o1.current(y * 0.2) * 3; // scaled to enhance demo effect
        var lx2 = x2 + o2.current(y * 0.2) * 3;
        var lx3 = x3 + o3.current(y * 0.2) * 3;

        // segment widths
        var w0 = lx1;
        var w1 = lx2 - lx1;
        var w2 = lx3 - lx2;
        var w3 = x4 - lx3;

        // draw image lines ---- source ----   --- destination ---
        ctx.drawImage(img, x0, y, x1, 1, 0, y, w0, 1);
        ctx.drawImage(img, x1, y, x2 - x1, 1, lx1 - 0.5, y, w1, 1);
        ctx.drawImage(img, x2, y, x3 - x2, 1, lx2 - 1, y, w2, 1);
        ctx.drawImage(img, x3, y, x4 - x3, 1, lx3 - 1.5, y, w3, 1);
      }
    }

    if (playCount > 0) {
      requestAnimationFrame(() =>
        this.loop(w, h, o1, o2, o3, x0, x1, x2, x3, x4, ctx, img, playCount)
      );
    }
  }

  toggleHover() {
    this.setState({
      isHover: !this.state.isHover,
      count: this.state.count + 1,
    });
    this.waves(this.state.count + 1);
  }

  render() {
    return (
      <div>
        <img
          style={{ display: 'none' }}
          src={this.props.source}
          onLoad={this.waves}
        />
        <canvas
          width="480"
          height="480"
          ref={this.canvas}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={this.props.action}
        ></canvas>
      </div>
    );
  }
}
