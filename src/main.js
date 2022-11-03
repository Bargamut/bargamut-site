import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.svelte';
import './assets/global.css';

const app = new App({
	target: document.body,
	// props: {
	// 	sitename: 'Bargamut'
	// }
});

export default app;