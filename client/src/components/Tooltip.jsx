export const Tooltip = (props) => {
  return (
    <div className="tooltip_container">
      <img
        className="small_product_image"
        src={props.img}
        alt={props.title}
        draggable="false"
      />
      <div className="info-container">
        <div className="description-container">
          <h6 className="description-title">Description</h6>
          <p className="description-text">{props.description}</p>
        </div>
        <div className="key-features-container">
          <h6 className="features-title">Key Features</h6>
          <div className="feature-list">
            {props.key_features &&
              Object.entries(props.key_features).map(([key, value]) => (
                <div key={key} className="feature-row">
                  <span className="feature-key">{key}:</span>
                  <span className="feature-value">{value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
