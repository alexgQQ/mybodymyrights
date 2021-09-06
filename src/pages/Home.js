import './Home.css';
import PageNavigation from '../components/PageNavigation';

export default function Home() {
    return (
      <div className={'home'}>
          <div className={'landingPad'}>
            <PageNavigation/>
            <h1>SEXLESS TEXAS</h1>
          </div>
      </div>
    );
}