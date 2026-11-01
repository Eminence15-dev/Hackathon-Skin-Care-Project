import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={15} />
          YOUR PERSONAL SKINCARE ASSISTANT
        </div>

        <h1>
          Understand your skin.
          <br />
          <span>Shop with confidence.</span>
        </h1>

        <p>
          Discover skincare that fits your needs, preferences and budget. Make
          more informed choices with AI-powered skin insights.
        </p>

        <a className="primary-button" href="#analysis">
          Start your skin journey
          <ArrowRight size={17} />
        </a>

        <div className="trust-row">
          <span>
            <ShieldCheck size={16} /> Privacy-conscious
          </span>
          <span>
            <Heart size={16} /> Personalised guidance
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-decoration decoration-one" />
        <div className="hero-decoration decoration-two" />
        <div className="hero-card">
          <div className="hero-card-top">
            <span>
              <Sparkles size={15} /> SKINCART INSIGHTS
            </span>
            <span className="live-dot" />
          </div>
          <div className="hero-illustration">
            <div className="face-shape">
              <div className="face-hair" />
              <div className="face-eyes">
                <span />
                <span />
              </div>
              <div className="face-nose" />
              <div className="face-mouth" />
            </div>
            <div className="floating-tag tag-left">
              <Sparkles size={14} /> Skin insights
            </div>
            <div className="floating-tag tag-right">
              <Leaf size={14} /> Your routine
            </div>
          </div>
          <div className="hero-card-bottom">
            <div>
              <strong>Your skin, your choices.</strong>
              <p>Personalised skincare starts here.</p>
            </div>
            <div className="mini-sparkle">
              <Sparkles size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
