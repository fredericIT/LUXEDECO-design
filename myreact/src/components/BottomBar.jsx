import './BottomBar.css';

export default function BottomBar() {
  return (
    <div className="bottom-bar" id="bottom-bar">
      <div className="container bottom-bar__inner">
        {/* Stars */}
        <div className="bottom-bar__stars" id="bottom-bar-stars">
          {'★★★★★'.split('').map((s, i) => (
            <span key={i} className="bottom-bar__star">{s}</span>
          ))}
        </div>

        {/* Counter */}
        <div className="bottom-bar__stat" id="bottom-bar-stat">
          <span className="bottom-bar__stat-number">1M+</span>
        </div>

        {/* Progress bar */}
        <div className="bottom-bar__center">
          <div className="bottom-bar__progress-track">
            <div className="bottom-bar__progress-fill" />
          </div>
          <span className="bottom-bar__heart">♥</span>
        </div>

        {/* Node icon */}
        <div className="bottom-bar__icon" id="bottom-bar-community">
          ⚙
        </div>
      </div>
    </div>
  );
}
