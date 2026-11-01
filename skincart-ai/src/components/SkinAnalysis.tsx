import { useRef, useState, type ChangeEvent } from "react";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  CircleHelp,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import "./SkinAnalysis.css";

function SkinAnalysis() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [budget, setBudget] = useState("1500");
  const [goal, setGoal] = useState("Hydration");
  const [preferences, setPreferences] = useState("No preference");

  function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
        setFileName(file.name);
      }
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    setImage(null);
    setFileName("");

    if (fileInput.current) {
      fileInput.current.value = "";
    }
  }

  return (
    <section className="analysis-section" id="analysis">
      <div className="section-heading">
        <div>
          <span className="eyebrow">LET'S GET PERSONAL</span>
          <h2>Start with your skin</h2>
          <p>Upload an image and tell us what you're looking for.</p>
        </div>
        <span className="step-label">STEP 01 / 02</span>
      </div>

      <div className="analysis-grid">
        <div className="upload-card">
          <div className="card-heading">
            <div className="heading-icon">
              <Camera size={19} />
            </div>
            <div>
              <h3>Skin image</h3>
              <p>Choose a clear image to get started.</p>
            </div>
          </div>

          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />

          {image ? (
            <div className="image-preview">
              <img src={image} alt="Your selected image preview" />
              <button
                className="remove-image"
                onClick={removeImage}
                aria-label="Remove image"
              >
                <X size={17} />
              </button>
              <div className="image-caption">
                <Check size={15} /> {fileName}
              </div>
            </div>
          ) : (
            <button
              className="upload-area"
              onClick={() => fileInput.current?.click()}
            >
              <div className="upload-icon">
                <Upload size={25} />
              </div>
              <strong>Upload your image</strong>
              <span>Click to browse your files</span>
              <small>JPG, PNG or WEBP · Maximum 5MB</small>
            </button>
          )}

          <div className="privacy-note">
            <ShieldCheck size={16} />
            Your image stays in this browser for now.
          </div>
        </div>

        <div className="preferences-card">
          <div className="card-heading">
            <div className="heading-icon">
              <Sparkles size={19} />
            </div>
            <div>
              <h3>Your preferences</h3>
              <p>Help us understand what you're looking for.</p>
            </div>
          </div>

          <label htmlFor="goal">Primary skincare goal</label>
          <div className="select-wrapper">
            <select
              id="goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            >
              <option>Hydration</option>
              <option>Understanding acne concerns</option>
              <option>Sun protection</option>
              <option>General skincare</option>
              <option>Understanding skin texture</option>
            </select>
            <ChevronDown size={17} />
          </div>

          <label htmlFor="budget">Your approximate budget</label>
          <div className="input-wrapper">
            <span>₹</span>
            <input
              id="budget"
              type="number"
              min="0"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            />
          </div>

          <label htmlFor="preferences">Ingredient preferences</label>
          <div className="select-wrapper">
            <select
              id="preferences"
              value={preferences}
              onChange={(event) => setPreferences(event.target.value)}
            >
              <option>No preference</option>
              <option>Fragrance-free</option>
              <option>Vegan products</option>
              <option>Simple ingredient lists</option>
            </select>
            <ChevronDown size={17} />
          </div>

          <button
            className="primary-button full-button"
            disabled={!image || Number(budget) < 0 || !budget}
            onClick={() =>
              alert(
                "Your preferences are ready. YouCam API integration is our next step!",
              )
            }
          >
            Continue to analysis
            <ArrowRight size={17} />
          </button>
          <p className="demo-note">
            <CircleHelp size={14} />
            Analysis will become available once the YouCam API is connected.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkinAnalysis;
