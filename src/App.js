import './App.scss'
import randomCounterNumber from './components/post/counter'
import Post from './components/post/Post'
import CHECKED_ICON from './components/post/assets/icons/checked.svg'
import ARROW_DOWN_ICON from './components/post/assets/icons/arrow-down.svg'
import COMMENT_ICON from './components/post/assets/icons/comment.svg'
import REPOST_ICON from './components/post/assets/icons/repost.svg'
import LIKE_ICON from './components/post/assets/icons/like.svg'
import SHARE_ICON from './components/post/assets/icons/share.svg'

const ANAKIN_IMAGE =
	'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'

const RAY_IMAGE =
	'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'

const JEREMY_IMAGE =
	'https://www.intelligentcarleasing.com/blog/wp-content/uploads/2015/03/Jeremy_Clarkson.jpg'

const STIG_IMAGE =
	'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/images/methode/2017/11/17/aeb939ae-cab0-11e7-9743-ef57fdb29dbc_1280x720_100811.jpg?itok=vqFmtD5S'

const feed = [
	{
		post: {
			author: {
				name: 'Anakin Skywalker',
				photo: ANAKIN_IMAGE,
				nickname: '@dart_vader',
				checked: {
					value: true,
					icon: CHECKED_ICON,
				},
			},
			content: {
				textContent: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
				imageContent: RAY_IMAGE,
				date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
			},
			action: {
				more: {
					icon: ARROW_DOWN_ICON,
				},
				comment: {
					icon: COMMENT_ICON,
					counter: randomCounterNumber(),
				},
				repost: {
					icon: REPOST_ICON,
					counter: randomCounterNumber(),
				},
				like: {
					icon: LIKE_ICON,
					counter: randomCounterNumber(),
				},
				share: {
					icon: SHARE_ICON,
				},
			},
		},
	},
	{
		post: {
			author: {
				name: 'Jeremy Charles Robert Clarkson',
				photo: JEREMY_IMAGE,
				nickname: '@jezza',
				checked: {
					value: true,
					icon: CHECKED_ICON,
				},
			},
			content: {
				textContent: 'This man invented curtains and smoking after dinner',
				imageContent: STIG_IMAGE,
				date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
			},
			action: {
				more: {
					icon: ARROW_DOWN_ICON,
				},
				comment: {
					icon: COMMENT_ICON,
					counter: randomCounterNumber(),
				},
				repost: {
					icon: REPOST_ICON,
					counter: randomCounterNumber(),
				},
				like: {
					icon: LIKE_ICON,
					counter: randomCounterNumber(),
				},
				share: {
					icon: SHARE_ICON,
				},
			},
		},
	},
]

const App = () => {
	return (
		<div className="feed">
			{feed.map((post, postId) => (
				<Post {...post} key={postId} />
			))}
		</div>
	)
}

export default App
