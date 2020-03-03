import NavigationBar from '../frontend/components/NavigationBar';
import '../public/log.css';
import translate from '../frontend/components/translate.js';
export default function Log({language}) {
  return (
    <div className="Clean">
        <h1>Log</h1>
        <div className="Footer"><NavigationBar/></div>
    </div>
  );
}
