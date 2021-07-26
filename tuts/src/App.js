import './App.css';
import CustomEvent from './components/CustomEvent';
import ShowStudents from './components/ErrorComponent';
import ErrorHandlingBoundary from './components/ErrorHandlingBoundary';
import SocketDemo from './components/SocketDemo';
import WebWorker from './WebWorker';

function App() {
  return (
    <div className="App">
      <SocketDemo />
      <WebWorker />
      {/* <ErrorHandlingBoundary>
        <ShowStudents />
      </ErrorHandlingBoundary> */}
      <CustomEvent />
    </div>
  );
}

export default App;
