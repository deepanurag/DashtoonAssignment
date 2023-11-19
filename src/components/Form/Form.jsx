import React, { useState } from "react";
import styles from "./Form.module.css";
import { Panel, PrimaryButton, SecondaryButton, TextArea } from "..";
import { generator } from "@/handler/form";

const Initial_Prompts = ["", "", "", "", "", "", "", "", "", ""];

const Form = () => {
  const [prompts, setPrompts] = useState(Initial_Prompts);

  const [showPanel, setShowPanel] = useState(false);

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (i, value) => {
    const updatedPrompts = [...prompts];
    updatedPrompts[i] = value;
    setPrompts([...updatedPrompts]);
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setShowPanel(true);
      const res = await generator(prompts);
      setImages(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowPanel(false);
    }
  };

  return (
    <>
      {!showPanel && !loading && (
        <div className={styles.container}>
          <div className={styles.yes}>
          <h3><span>Dashtoon</span> . Comic</h3>
          <h2>Let's Create Together</h2>
          </div>
          <div className={styles.boxing}>
          {prompts.map((prompt, index) => {
            return (
              <TextArea
                label={`Comic Strip ${index + 1}:`}
                value={prompt}
                onChange={(e) => {
                  handleChange(index, e.target.value);
                }}
              />
            );
          })}
          </div>
          <div className={styles.btn}
            style={{
              width:"100%",
              display: "flex",
              justifyContent:"space-between",
              marginTop: "12px",
              alignSelf: "flex-end",
              
            }}
          >
            <SecondaryButton
              title="Clear Strips"
              onClick={() => {
                setPrompts(Initial_Prompts);
              }}
            />
            <PrimaryButton
              title="Generate Comic Strips"
              onClick={handleGenerate}
            />
          </div>
        </div>
      )}

      {loading && (
        <div className={styles.loader}>
          <img src="/animation.gif" />
        </div>
      )}

      {showPanel && !loading && (
        <>
          <img
            className={styles.close}
            src="/cross.svg"
            onClick={() => {
              setShowPanel(false);
            }}
          />
          <Panel images={images} />
        </>
      )}
    </>
  );
};

export default Form;
