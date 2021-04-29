function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Code snippet of my form from my website
// www.sharna.dev

class Form extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      isSending: false,
      anim: false });_defineProperty(this, "validateForm",

    toggle => {
      const { anim, isSending } = this.state;
      if (!anim && !isSending) {
        toggle ?
        anime({
          targets: ["#rectwrap rect"],
          strokeDashoffset: [anime.setDashoffset, 0],
          opacity: [
          {
            value: 1,
            duration: 50 }],


          easing: "easeOutQuad",
          duration: 650 }) :

        anime({
          targets: ["#rectwrap rect"],
          strokeDashoffset: [0, anime.setDashoffset],
          easing: "easeOutQuad",
          duration: 700 });

      }
    });_defineProperty(this, "timeline",

    () => {
      const moo = () => {
        this.setState({ anim: false });
      };
      let tl = anime.timeline({
        easing: "easeInOutSine",
        changeComplete: function () {
          moo();
        } });

      tl.add({
        targets: ".inp",
        translateX: "100%",
        opacity: [1, 0],
        easing: "easeInOutSine",
        duration: 350,
        delay: (el, i) => 150 * i }).

      add({
        targets: "#submit",
        outlineWidth: "0px",
        duration: 0,
        easing: "easeInOutSine" }).

      add({
        targets: ["#rectwrap rect"],
        opacity: 0,
        easing: "easeOutQuad",
        duration: 100 }).

      add({
        targets: ".siz",
        translateY: "60px",
        duration: 250 }).

      add({
        targets: ".siz",
        translateY: "-600px",
        easing: "easeInQuad",
        duration: 500 }).

      add({
        targets: ".siz",
        opacity: [1, 0],
        duration: 200 });

    });_defineProperty(this, "reverseAnim",
    () => {
      const moo = () => {
        this.setState({ anim: false });
      };
      this.setState(
      {
        isSending: false,
        anim: true },

      () => {
        let tl = anime.timeline({
          easing: "easeInOutSine",
          changeComplete: function () {
            moo();
          } });

        tl.add({
          targets: ".inp",
          translateX: "0%",
          opacity: [0, 1],
          easing: "easeInOutSine",
          duration: 350,
          delay: (el, i) => 150 * i }).

        add({
          targets: ".siz",
          translateY: "0%",
          translateX: "0%",
          duration: 0 }).

        add({
          targets: "#submit",
          outlineWidth: "1px",
          duration: 300,
          easing: "easeInOutSine" }).

        add({
          targets: ".siz",
          opacity: [0, 1],
          duration: 300 }).

        add({
          targets: ["#rectwrap rect"],
          opacity: [0],
          strokeDashoffset: [0],
          duration: 100 });

      });

    });_defineProperty(this, "send",
    e => {
      e.preventDefault();

      this.setState({ anim: true, isSending: true }, () => {});
      this.timeline();
    });}
  render() {
    const { isSending, anim } = this.state;
    return /*#__PURE__*/(
      React.createElement("form", { id: "contactform", onSubmit: this.send },
      isSending && !anim && /*#__PURE__*/
      React.createElement("div", { id: "update" }, /*#__PURE__*/
      React.createElement("p", null, "Your message is on it's way!"), /*#__PURE__*/
      React.createElement("button", { id: "btn", onClick: this.reverseAnim }, "Send another")), /*#__PURE__*/




      
      React.createElement("button", {
        id: "submit",
        type: "submit",
        onMouseEnter: () => this.validateForm(true),
        onMouseLeave: () => this.validateForm(false) }, /*#__PURE__*/

      React.createElement("svg", { width: "100%", height: "100%", id: "rectwrap" }, /*#__PURE__*/
      React.createElement("defs", null, /*#__PURE__*/
      React.createElement("linearGradient", {
        id: "linear-gradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%" }, /*#__PURE__*/

      React.createElement("stop", { offset: "0%", stopColor: "#00fdff", stopOpacity: "1" }), /*#__PURE__*/
      React.createElement("stop", { offset: "100%", stopColor: "#f093fb", stopOpacity: "1" }))), /*#__PURE__*/


      React.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "none",
        strokeWidth: "3",
        stroke: "url(#linear-gradient)",
        strokeDasharray: "5000",
        strokeDashoffset: "5000" })), /*#__PURE__*/



      React.createElement("div", { className: "siz" }, /*#__PURE__*/
      React.createElement("svg", {
        id: "Capa_1",
        height: "30",
        viewBox: "0 0 512.056 512.056",
        width: "30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#000000" }, /*#__PURE__*/

      React.createElement("path", { d: "m350.038 120.265c-7.206-36.687-27.738-70.157-57.939-92.992l-36.071-27.273-36.071 27.272c-30.201 22.835-50.733 56.305-57.939 92.992h188.02z" }), /*#__PURE__*/
      React.createElement("path", { d: "m394.777 252.144v151.096h77.609v-69.027z" }), /*#__PURE__*/
      React.createElement("path", { d: "m337.633 221.387c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279c0-11.732-9.545-21.278-21.277-21.278z" }), /*#__PURE__*/
      React.createElement("path", { d: "m195.701 242.665c0-11.732-9.545-21.278-21.277-21.278h-5.867c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279z" }), /*#__PURE__*/
      React.createElement("path", { d: "m117.279 252.144-77.609 82.069v69.027h77.609z" }), /*#__PURE__*/
      React.createElement("path", { d: "m286.355 417.944v-175.279c0-28.275 23.003-51.278 51.277-51.278h5.867c3.213 0 6.353.311 9.403.879v-42.001h-193.75v42.001c3.051-.568 6.19-.879 9.403-.879h5.867c28.274 0 51.277 23.003 51.277 51.278v175.279h-54.474c-2.706 12.642-2.828 26.509 3.811 38.389l4.293 7.683h25.264c5.605 13.589 18.466 35.112 45.957 45.893l5.477 2.148 5.477-2.148c27.491-10.781 40.352-32.303 45.957-45.893h25.264l4.294-7.683c6.638-11.88 6.516-25.747 3.81-38.389z" }))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Form, null), document.getElementById("root"));